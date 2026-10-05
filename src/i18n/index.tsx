import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { translate } from './translate';
import en from './locales/en';
import nb from './locales/nb';

const STORAGE_KEY = 'trailovic.locale';
const DEFAULT_LOCALE = 'en';

export type TranslationKey = keyof typeof en;

export const localeConfig = {
  en: { label: 'English', shortLabel: 'ENG', dir: 'ltr' },
  nb: { label: 'Norsk', shortLabel: 'NO', dir: 'ltr' },
} as const satisfies Record<string, { label: string; shortLabel: string; dir: 'ltr' | 'rtl' }>;

export type Locale = keyof typeof localeConfig;

export const translations = {
  en,
  nb,
} satisfies Record<Locale, Record<TranslationKey, string>>;

const supportedLocales = Object.keys(localeConfig) as Locale[];

function isLocale(value: string | null | undefined): value is Locale {
  return Boolean(value && supportedLocales.includes(value as Locale));
}

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;

  try {
    const savedLocale = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(savedLocale)) return savedLocale;
  } catch {
    // Storage can be unavailable in restricted browsing contexts.
  }

  for (const browserLanguage of window.navigator.languages ?? [window.navigator.language]) {
    const baseLocale = browserLanguage.split('-')[0];
    if (isLocale(baseLocale)) return baseLocale;
  }

  return DEFAULT_LOCALE;
}

type Variables = Record<string, string | number>;

type I18nContextValue = {
  locale: Locale;
  locales: readonly Locale[];
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey, variables?: Variables) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // The active language still works even when storage is unavailable.
    }

    document.documentElement.lang = locale;
    document.documentElement.dir = localeConfig[locale].dir;
    document.title = translate(locale, 'seo.title');

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute('content', translate(locale, 'seo.description'));
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      locales: supportedLocales,
      setLocale,
      t: (key, variables) => translate(locale, key, variables),
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider');
  }

  return context;
}

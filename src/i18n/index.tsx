import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import en from './locales/en';

const STORAGE_KEY = 'trailovic.locale';

export const translations = { en } as const;
export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof en;

const supportedLocales = Object.keys(translations) as Locale[];

function isLocale(value: string | null | undefined): value is Locale {
  return Boolean(value && supportedLocales.includes(value as Locale));
}

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en';

  const savedLocale = window.localStorage.getItem(STORAGE_KEY);
  if (isLocale(savedLocale)) return savedLocale;

  const browserLocale = window.navigator.language.split('-')[0];
  return isLocale(browserLocale) ? browserLocale : 'en';
}

type Variables = Record<string, string | number>;

function translate(locale: Locale, key: TranslationKey, variables?: Variables) {
  const dictionary = translations[locale] ?? translations.en;
  let value = dictionary[key] ?? translations.en[key];

  if (variables) {
    for (const [name, replacement] of Object.entries(variables)) {
      value = value.replaceAll(`{{${name}}}`, String(replacement));
    }
  }

  return value;
}

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
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
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

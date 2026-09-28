import { Languages } from 'lucide-react';
import { useI18n, type Locale } from '../i18n';

const localeNames: Record<Locale, string> = {
  en: 'English',
};

export default function LanguageSwitcher() {
  const { locale, locales, setLocale, t } = useI18n();

  if (locales.length < 2) return null;

  return (
    <label className="flex items-center gap-2 text-sm text-slate-300">
      <Languages size={17} aria-hidden="true" />
      <span className="sr-only">{t('language.label')}</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        aria-label={t('language.label')}
        className="rounded-lg border border-white/10 bg-slate-950 px-2 py-1.5 text-sm text-white outline-none transition focus:border-violet-500"
      >
        {locales.map((item) => (
          <option key={item} value={item}>
            {localeNames[item]}
          </option>
        ))}
      </select>
    </label>
  );
}

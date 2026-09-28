import { ChevronDown, Languages } from 'lucide-react';
import { localeConfig, useI18n, type Locale } from '../i18n';

export default function LanguageSwitcher() {
  const { locale, locales, setLocale, t } = useI18n();

  if (locales.length < 2) return null;

  return (
    <label className="group relative flex items-center">
      <span className="sr-only">{t('language.label')}</span>

      <Languages
        size={17}
        aria-hidden="true"
        className="pointer-events-none absolute left-3 z-10 text-violet-300 transition-colors group-hover:text-violet-200"
      />

      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        aria-label={t('language.label')}
        className="appearance-none rounded-xl border border-white/10 bg-white/5 py-2.5 pl-9 pr-9 text-sm font-medium text-slate-200 shadow-sm outline-none transition duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white focus:border-violet-500/70 focus:bg-white/10 focus:ring-2 focus:ring-violet-500/20"
      >
        {locales.map((item) => (
          <option key={item} value={item} className="bg-slate-950 text-white">
            {localeConfig[item].label}
          </option>
        ))}
      </select>

      <ChevronDown
        size={15}
        aria-hidden="true"
        className="pointer-events-none absolute right-3 text-slate-400 transition-colors group-hover:text-slate-200"
      />
    </label>
  );
}

import { useI18n, type TranslationKey } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';

const navItems: { label: TranslationKey; href: string }[] = [
  { label: 'nav.home', href: '#home' },
  { label: 'nav.about', href: '#about' },
  { label: 'nav.skills', href: '#skills' },
  { label: 'nav.projects', href: '#projects' },
  { label: 'nav.contact', href: '#contact' },
];

export default function Header() {
  const { t } = useI18n();

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="flex items-end gap-3">
          <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-3xl font-black text-transparent">
            LT
          </span>

          <span className="text-lg font-bold text-white">
            trailovic.dev
          </span>
        </a>

        <div className="xl:hidden">
          <LanguageSwitcher compact />
        </div>

        <nav className="hidden items-center gap-8 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-violet-400"
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:scale-105"
          >
            {t('nav.workTogether')}
          </a>
        </div>
      </div>
    </header>
  );
}

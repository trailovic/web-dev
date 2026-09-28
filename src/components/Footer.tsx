import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useI18n } from '../i18n';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="bg-linear-to-r from-violet-500 to-blue-500 bg-clip-text text-2xl font-black text-transparent"
          >
            Luka Trailović
          </a>

          <p className="mt-2 text-sm text-slate-400">
            {t('footer.tagline')}
          </p>
        </div>

        <div className="flex items-center gap-5 text-slate-400">
          <a href="https://github.com/trailovic" aria-label="GitHub" className="transition hover:text-violet-400">
            <FaGithub size={22} />
          </a>

          <a href="https://www.linkedin.com/in/trailovicluka/" aria-label="LinkedIn" className="transition hover:text-violet-400">
            <FaLinkedin size={22} />
          </a>

          <a
            href="mailto:hello@trailovic.dev"
            aria-label="Email"
            className="transition hover:text-violet-400"
          >
            <Mail size={22} />
          </a>
        </div>

        <p className="text-sm text-slate-500">
          ©{new Date().getFullYear()} trailovic.dev | {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}

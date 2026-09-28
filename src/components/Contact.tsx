import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useI18n } from '../i18n';

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold text-violet-400">{t('contact.eyebrow')}</p>

          <h2 className="mb-6 text-4xl font-black text-white">
            {t('contact.title')}
          </h2>

          <p className="max-w-xl text-lg leading-8 text-slate-400">
            {t('contact.description')}
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="mailto:hello@trailovic.dev"
              className="flex items-center gap-4 text-slate-300 transition hover:text-violet-400"
            >
              <Mail className="text-violet-400" size={22} />
              hello@trailovic.dev
            </a>

            <div className="flex items-center gap-4 text-slate-300">
              <MapPin className="text-violet-400" size={22} />
              {t('contact.location')}
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <a
              href="https://github.com/trailovic"
              aria-label="GitHub"
              className="rounded-xl border border-white/10 p-3 text-slate-300 transition hover:border-violet-400 hover:text-violet-400"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/trailovicluka/"
              aria-label="LinkedIn"
              className="rounded-xl border border-white/10 p-3 text-slate-300 transition hover:border-violet-400 hover:text-violet-400"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        <form className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl shadow-slate-950/50">
          <div className="grid gap-6">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-300">
                {t('contact.name')}
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder={t('contact.namePlaceholder')}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-300">
                {t('contact.email')}
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500"
              />
            </div>

            <div>
              <label htmlFor="contact-project-type" className="mb-2 block text-sm font-medium text-slate-300">
                {t('contact.projectType')}
              </label>
              <select
                id="contact-project-type"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-violet-500"
              >
                <option>{t('contact.projectType.website')}</option>
                <option>{t('contact.projectType.webApp')}</option>
                <option>{t('contact.projectType.frontend')}</option>
                <option>{t('contact.projectType.fullStack')}</option>
                <option>{t('contact.projectType.other')}</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-300">
                {t('contact.message')}
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder={t('contact.messagePlaceholder')}
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500"
              />
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
            >
              {t('contact.send')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

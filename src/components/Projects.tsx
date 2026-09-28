import { ArrowUpRight } from 'lucide-react';
import { useI18n, type TranslationKey } from '../i18n';

const projects: {
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  image: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
}[] = [
  {
    titleKey: 'projects.it.title',
    image: '/it-portfolio.png',
    descriptionKey: 'projects.it.description',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://it.trailovic.dev',
    codeUrl: 'https://github.com/trailovic/it-tech.git',
  },
  {
    titleKey: 'projects.jot.title',
    image: '/jot.png',
    descriptionKey: 'projects.jot.description',
    tags: ['Next.js', 'TypeScript', 'App UI', 'Productivity', 'Frontend'],
    liveUrl: 'https://jot-mu.vercel.app/',
    codeUrl: 'https://github.com/trailovic/jot-app.git',
  },
  {
    titleKey: 'projects.fjord.title',
    image: '/fjord-import.png',
    descriptionKey: 'projects.fjord.description',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Landing Page'],
    liveUrl: 'https://fjordimport.vercel.app/',
    codeUrl: 'https://github.com/trailovic/fjordimport.git',
  },
  {
    titleKey: 'projects.ajvar.title',
    image: '/ajvar.png',
    descriptionKey: 'projects.ajvar.description',
    tags: ['React', 'TypeScript', 'Supabase', 'Cloudflare D1', 'Drizzle ORM'],
    liveUrl: 'https://ajvar.trailovicluka.workers.dev/',
    codeUrl: 'https://github.com/trailovic/ajvar',
  },
];

export default function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-semibold text-violet-400">
              {t('projects.eyebrow')}
            </p>

            <h2 className="max-w-2xl text-4xl font-black text-white">
              {t('projects.title')}
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-slate-400">
            {t('projects.description')}
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => {
            const title = t(project.titleKey);

            return (
              <article
                key={project.titleKey}
                className="grid overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl shadow-slate-950/40 lg:grid-cols-2"
              >
                <div
                  className={`overflow-hidden bg-slate-950 p-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                      <span className="h-3 w-3 rounded-full bg-red-500" />
                      <span className="h-3 w-3 rounded-full bg-yellow-500" />
                      <span className="h-3 w-3 rounded-full bg-green-500" />
                    </div>

                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={t('projects.screenshotAlt', { title })}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 md:p-10">
                  <h3 className="mb-4 text-3xl font-black text-white">{title}</h3>

                  <p className="mb-6 text-lg leading-8 text-slate-400">
                    {t(project.descriptionKey)}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-violet-200"
                    >
                      {t('projects.liveDemo')}
                      <ArrowUpRight size={18} />
                    </a>

                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-violet-400 hover:text-violet-300"
                    >
                      {t('projects.viewCode')}
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

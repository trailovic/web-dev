import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'IT Technician Portfolio',
    image: '/it-portfolio.png',
    description:
      'A professional portfolio website built for showcasing IT support experience, technical skills, project work, and a downloadable résumé.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://it.trailovic.dev',
    codeUrl: 'https://github.com/trailovic/it-tech.git',
  },
  {
    title: 'Jot: A Notion Clone',
    image: '/jot.png',
    description:
      'A productivity-focused Notion-style application for creating, organizing, and managing notes and documents with a modern user interface.',
    tags: ['Next.js', 'TypeScript', 'App UI', 'Productivity', 'Frontend'],
    liveUrl: 'https://jot-mu.vercel.app/',
    codeUrl: 'https://github.com/trailovic/jot-app.git',
  },
  {
    title: 'Fjord Import Landing Page',
    image: '/fjord-import.png',
    description:
      'A clean Scandinavian-style landing page for an import company, focused on trust, services, product categories, and B2B lead generation.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Landing Page'],
    liveUrl: 'https://fjordimport.vercel.app/',
    codeUrl: 'https://github.com/trailovic/fjordimport.git',
  },
  {
    title: 'Ajvar — Family Recipe Hub',
    image: '/ajvar.png',
    description:
      'A family recipe hub for creating, discovering, and sharing recipes through personal collections and collaborative kitchens.',
    tags: ['React', 'TypeScript', 'Supabase', 'Cloudflare D1', 'Drizzle ORM'],
    liveUrl: 'https://ajvar.trailovicluka.workers.dev/',
    codeUrl: 'https://github.com/trailovic/ajvar',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-semibold text-violet-400">
              Featured Work
            </p>

            <h2 className="max-w-2xl text-4xl font-black text-white">
              Projects that show how I build, solve, and ship.
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-slate-400">
            A selected group of projects focused on real-world usability,
            clean interfaces, and practical business value.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl shadow-slate-950/40 lg:grid-cols-2"
            >
              <div
                className={`overflow-hidden bg-slate-950 p-4 ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
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
                      alt={`${project.title} screenshot`}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10">
                <h3 className="mb-4 text-3xl font-black text-white">
                  {project.title}
                </h3>

                <p className="mb-6 text-lg leading-8 text-slate-400">
                  {project.description}
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
                    Live Demo
                    <ArrowUpRight size={18} />
                  </a>

                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-violet-400 hover:text-violet-300"
                  >
                    View Code
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
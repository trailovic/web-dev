import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'IT Support Portfolio',
    description:
      'A responsive portfolio website for an IT Support Technician, built with React, Vite, Tailwind CSS, and deployed with Vercel.',
    image: '/project-it-portfolio.png',
    tags: ['React', 'Vite', 'Tailwind', 'Vercel'],
    liveUrl: 'https://it.trailovic.dev',
    codeUrl: '#',
  },
  {
    title: 'Natural Products Storefront',
    description:
      'A modern ecommerce storefront concept for natural beauty and hygiene products with premium Mediterranean-inspired design.',
    image: '/project-storefront.png',
    tags: ['React', 'Shopify', 'Tailwind', 'UI Design'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'PDF Schedule Generator',
    description:
      'A simple tool concept that turns structured form input into clean, printable PDF schedules for non-technical users.',
    image: '/project-pdf-generator.png',
    tags: ['React', 'Forms', 'PDF', 'UX'],
    liveUrl: '#',
    codeUrl: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-semibold text-violet-400">Featured Work</p>

            <h2 className="max-w-2xl text-4xl font-black text-white">
              Projects that show how I build, solve, and ship.
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-slate-400">
            A selection of portfolio projects, experiments, and practical tools
            focused on real-world usability.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl shadow-slate-950/40 lg:grid-cols-2"
            >
              <div
                className={`min-h-72 bg-gradient-to-br from-violet-600/30 to-blue-600/20 p-6 ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="flex h-full items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-center">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-violet-300">
                      Project Preview
                    </p>
                    <h3 className="mt-4 text-3xl font-black text-white">
                      {project.title}
                    </h3>
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
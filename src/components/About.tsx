import { ArrowRight } from 'lucide-react';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from 'react-icons/si';

const techStack = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Git', icon: FaGitAlt },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-y border-white/10 bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold text-violet-400">About Me</p>

          <h2 className="mb-6 text-4xl font-black text-white">
            Building practical web experiences with clean code.
          </h2>

          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              I&apos;m a web developer based in Norway, focused on creating
              modern, responsive, and useful web applications with React,
              TypeScript, Tailwind CSS, and backend technologies.
            </p>

            <p>
              I enjoy turning ideas into working products, designing clean user
              interfaces, and building projects that are easy to maintain and
              improve over time.
            </p>
          </div>

          <a
            href="#projects"
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-violet-400 hover:text-violet-300"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
        </div>

        <div id="skills">
          <p className="mb-3 font-semibold text-violet-400">Tech Stack</p>

          <h2 className="mb-8 text-4xl font-black text-white">
            Tools I Work With
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {techStack.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 p-5 transition hover:-translate-y-1 hover:border-violet-500/50 hover:bg-white/6"
                >
                  <Icon className="text-violet-400" size={28} />
                  <span className="font-semibold text-white">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
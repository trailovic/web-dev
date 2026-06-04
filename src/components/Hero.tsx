import { ArrowRight, Download, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-24 pt-28 md:pb-32 md:pt-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(124,58,237,0.28),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(37,99,235,0.16),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xl font-bold text-violet-400">
            Hi, I&apos;m Luka
          </p>

          <h1 className="max-w-2xl text-5xl font-black leading-tight text-white md:text-7xl">
            Full-Stack Web Developer
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            I build modern, responsive, and user-friendly web applications
            that turn ideas into useful digital products.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:scale-105"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-violet-400 hover:text-violet-300"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>

          <div className="mt-8 flex gap-5 text-slate-400">
            <a href="https://github.com/trailovic" className="transition hover:text-violet-400">
              <FaGithub size={22} />
            </a>

            <a href="https://www.linkedin.com/in/trailovicluka/" className="transition hover:text-violet-400">
              <FaLinkedin size={22} />
            </a>

            <a href="mailto:hello@trailovic.dev" className="transition hover:text-violet-400">
              <SiGmail size={22} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-violet-950/40 backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-slate-950">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="p-6 font-mono text-sm leading-7 text-slate-300">
                <p>
                  <span className="text-violet-400">const</span>{' '}
                  <span className="text-blue-300">developer</span> = {'{'}
                </p>
                <p className="pl-6">
                  name: <span className="text-green-300">&apos;Luka Trailović&apos;</span>,
                </p>
                <p className="pl-6">
                  focus: <span className="text-green-300">&apos;React + TypeScript&apos;</span>,
                </p>
                <p className="pl-6">
                  stack: [
                  <span className="text-green-300">&apos;Vite&apos;</span>,{' '}
                  <span className="text-green-300">&apos;Tailwind&apos;</span>,{' '}
                  <span className="text-green-300">&apos;Node&apos;</span>],
                </p>
                <p className="pl-6">
                  mission: <span className="text-green-300">&apos;Build useful things&apos;</span>,
                </p>
                <p>{'};'}</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-8 hidden rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-xl md:block">
            <Code2 className="mb-3 text-violet-400" size={28} />
            <p className="font-semibold text-white">Clean Code</p>
            <p className="text-sm text-slate-400">Maintainable, scalable UI</p>
          </div>
        </div>
      </div>
    </section>
  );
}
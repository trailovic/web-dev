import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold text-violet-400">Contact</p>

          <h2 className="mb-6 text-4xl font-black text-white">
            Have a project in mind?
          </h2>

          <p className="max-w-xl text-lg leading-8 text-slate-400">
            I&apos;m open to web development opportunities, freelance projects,
            collaborations, and roles where I can build useful digital products
            with clean, maintainable code.
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
              Oslo, Norway
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <a
              href="#"
              className="rounded-xl border border-white/10 p-3 text-slate-300 transition hover:border-violet-400 hover:text-violet-400"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="#"
              className="rounded-xl border border-white/10 p-3 text-slate-300 transition hover:border-violet-400 hover:text-violet-400"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        <form className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl shadow-slate-950/50">
          <div className="grid gap-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Project Type
              </label>
              <select className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-violet-500">
                <option>Website</option>
                <option>Web App</option>
                <option>Frontend Development</option>
                <option>Full-Stack Project</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me what you want to build..."
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500"
              />
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
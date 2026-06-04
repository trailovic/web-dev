import {
  Header,
  Hero,
  About,
  Projects,
  Contact,
  Footer,
} from './components';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { GeoAi } from './components/GeoAi';
import { GlobalBackground } from './components/GlobalBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Stats } from './components/Stats';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden text-ink">
      <GlobalBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <GeoAi />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

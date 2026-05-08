import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GitHubActivity from './components/GitHubActivity';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useReveal } from './hooks/reveal';

function App() {
  useReveal();
  
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

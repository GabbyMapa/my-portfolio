import { useScrollSpy } from '../hooks/scroll';

export default function Navigation() {
  const activeSection = useScrollSpy(['hero', 'projects', 'skills', 'resume', 'contact']);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold text-rose-dark hover:text-clay transition-colors"
          >
            Portfolio
          </button>
          <div className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection('projects')}
              className={`font-medium transition-colors ${
                activeSection === 'projects' 
                  ? 'text-rose-dark font-bold' 
                  : 'text-gray-700 hover:text-rose-dark'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`font-medium transition-colors ${
                activeSection === 'skills' 
                  ? 'text-rose-dark font-bold' 
                  : 'text-gray-700 hover:text-rose-dark'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('resume')}
              className={`font-medium transition-colors ${
                activeSection === 'resume' 
                  ? 'text-rose-dark font-bold' 
                  : 'text-gray-700 hover:text-rose-dark'
              }`}
            >
              Resume
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors ${
                activeSection === 'contact' 
                  ? 'text-rose-dark font-bold' 
                  : 'text-gray-700 hover:text-rose-dark'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

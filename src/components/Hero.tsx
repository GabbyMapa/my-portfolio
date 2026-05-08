import { personalInfo } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-soft via-rose-medium to-rose-soft" id="hero">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="/profile.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback gradient if image not found
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-rose-dark', 'to-clay');
                }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              {personalInfo.name}
            </h1>
            <p className="text-2xl md:text-3xl text-rose-dark font-medium mb-8">
              {personalInfo.title}
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="flex justify-center md:justify-start gap-4 flex-wrap">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
              >
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-clay text-white rounded-full hover:bg-rose-dark transition-all shadow-lg hover:shadow-xl"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all shadow-lg hover:shadow-xl"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

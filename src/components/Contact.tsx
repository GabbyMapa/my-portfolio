import { personalInfo } from '../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 reveal">
          Get In Touch
        </h2>
        
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-xl text-gray-600 mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-8 py-4 bg-clay text-white rounded-full hover:bg-rose-dark transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              Send Email
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-clay text-clay rounded-full hover:bg-clay hover:text-white transition-colors text-lg font-semibold"
            >
              Connect on LinkedIn
            </a>
          </div>
          
          <p className="text-gray-600">
            Email: <a href={`mailto:${personalInfo.email}`} className="text-rose-dark hover:underline">{personalInfo.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}

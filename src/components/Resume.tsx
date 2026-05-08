import { resumeData } from '../data/portfolio';

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 reveal">
          Resume
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Experience */}
          <div className="reveal">
            <h3 className="text-3xl font-bold text-rose-dark mb-8">
              Experience
            </h3>
            <div className="space-y-8">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-rose-dark pl-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-lg text-gray-600 mb-2">
                    {exp.organization} | {exp.period}
                  </p>
                  {exp.description && (
                    <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-rose-soft text-rose-dark rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-rose-dark mb-8">
              Education
            </h3>
            <div className="space-y-8">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-rose-dark pl-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {edu.title}
                  </h4>
                  <p className="text-lg text-gray-600 mb-2">
                    {edu.organization} | {edu.period}
                  </p>
                  {edu.description && (
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {edu.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center pt-8">
            <a
              href="/resume.pdf"
              download
              className="inline-block px-8 py-4 bg-clay text-white rounded-full hover:bg-rose-dark transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

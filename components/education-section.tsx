const education = {
  year: "2015 - 2020",
  title: "Education & Skill Development",
  institution: "Daeyang University",
  description:
    "Completed Bachelor of Science in Information & Communication Technology while building foundational programming skills and earning industry certifications.",
  achievements: [
    "Graduated with BSc in Information & Communication Technology",
    "Earned Google Certified Associate Android Developer certification",
    "Completed Developing Android App with Kotlin certification",
    "Built strong foundation in mobile development and software engineering",
  ],
}

export function EducationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-4">Education & Skill Development</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Formal education and certifications that shaped my engineering foundations</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] via-blue-500 to-[var(--primary)]"></div>

          <div className="space-y-12">
            <div className="relative flex items-start animate-fade-in-up">
              <div className="absolute left-6 w-4 h-4 bg-[var(--primary)] rounded-full border-4 border-white shadow-lg"></div>

              <div className="ml-20 bg-slate-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-800 mb-1">{education.title}</h3>
                    <p className="text-[var(--primary)] font-medium text-lg">{education.institution}</p>
                  </div>
                  <span className="text-slate-600 font-medium mt-2 md:mt-0">{education.year}</span>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">{education.description}</p>

                <div className="space-y-2">
                  <h4 className="font-medium text-slate-800 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {education.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-600 text-sm">
                        <span className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



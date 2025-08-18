const experiences = [
  {
    year: "Sep 2022 - Dec 2024",
    title: "Lead Application Developer",
    company: "D-Tree International",
    description:
      "Served as Lead Application Developer developing Android-based FHIR projects in collaboration with the ONA team from Kenya, driving healthcare technology solutions for digital health interventions.",
    achievements: [
      "Engineered Android applications for tuberculosis (TB) treatment and patient care",
      "Led development of insulin management and trauma patient care applications",
      "Collaborated with international teams to deliver scalable healthcare solutions",
      "Implemented FHIR standards for healthcare data interoperability",
    ],
  },
  {
    year: "Jan 2020 - Sep 2022",
    title: "Software Engineer",
    company: "Global Health Informatics Institute (AppHatchery)",
    description:
      "Developed Android applications for digital health interventions, focusing on healthcare technology solutions that improve patient outcomes and healthcare delivery across Africa.",
    achievements: [
      "Built multiple healthcare mobile applications published on Google Play Store",
      "Developed TypeU diabetes education app for Emory University",
      "Created Georgia TB Reference Guide for healthcare workers",
      "Contributed to OpenAMR antimicrobial resistance surveillance system",
    ],
  },
  {
    year: "2015 - 2020",
    title: "Education & Skill Development",
    company: "Daeyang University",
    description:
      "Completed Bachelor of Science in Information & Communication Technology while building foundational programming skills and earning industry certifications.",
    achievements: [
      "Graduated with BSc in Information & Communication Technology",
      "Earned Google Certified Associate Android Developer certification",
      "Completed Developing Android App with Kotlin certification",
      "Built strong foundation in mobile development and software engineering",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-4">Professional Journey</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building healthcare technology solutions that make a real difference in people's lives across Africa
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-600 via-blue-500 to-emerald-600"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative flex items-start animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content card */}
                <div className="ml-20 bg-slate-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-slate-800 mb-1">{experience.title}</h3>
                      <p className="text-emerald-600 font-medium text-lg">{experience.company}</p>
                    </div>
                    <span className="text-slate-600 font-medium mt-2 md:mt-0">{experience.year}</span>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">{experience.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-800 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-slate-600 text-sm">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "FHIRCORE",
    role: "Software Engineer",
    year: "2022-2024",
    description:
      "Open-source Android application framework for building FHIR-based healthcare applications. Collaborated with ONA team from Kenya to create scalable digital health solutions.",
    link: "https://github.com/opensrp/fhircore/tree/mwcore-dev",
    tags: ["Android", "FHIR", "Kotlin", "Healthcare"],
    featured: true,
    type: "github",
  },
  {
    id: 2,
    title: "HYMN BOOK",
    role: "Android Developer",
    year: "2020-2022",
    description:
      "Digital hymn book application providing easy access to religious songs and worship materials for mobile users.",
    link: "https://play.google.com/store/apps/details?id=net.techandgraphics.hymn",
    tags: ["Android", "Kotlin", "Mobile App"],
    type: "playstore",
  },
  {
    id: 3,
    title: "Georgia TB Reference Guide",
    role: "Android Developer",
    year: "2020-2022",
    description:
      "Healthcare reference application for tuberculosis treatment guidelines, supporting healthcare workers in Georgia.",
    link: "https://play.google.com/store/apps/details?id=org.apphatchery.gatbreferenceguide",
    tags: ["Android", "Healthcare", "Medical Reference"],
    type: "playstore",
  },
  {
    id: 4,
    title: "TypeU",
    role: "Android Developer",
    year: "2020-2022",
    description: "Educational mobile application focused on diabetes management and patient education.",
    link: "https://play.google.com/store/apps/details?id=edu.emory.diabetes.education",
    tags: ["Android", "Healthcare", "Education", "Diabetes"],
    type: "playstore",
  },
  {
    id: 5,
    title: "OpenAMR",
    role: "Software Engineer",
    year: "2020-2022",
    description:
      "Open-source antimicrobial resistance surveillance system for tracking and managing drug-resistant infections.",
    link: "https://github.com/global-health-informatics-institute/OpenAMR",
    tags: ["Python", "Healthcare", "Data Analysis"],
    type: "github",
  },
  {
    id: 6,
    title: "MAMALOVE",
    role: "Full-Stack Developer",
    year: "2020-2022",
    description:
      "Maternal health platform providing resources and support for expecting mothers and healthcare providers.",
    link: "https://mamalove.love",
    tags: ["Web Development", "Healthcare", "Maternal Health"],
    type: "website",
  },
]

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)


  const getIcon = (type: string) => {
    switch (type) {
      case "github":
        return <Github className="w-4 h-4" />
      case "playstore":
      case "website":
        return <ExternalLink className="w-4 h-4" />
      default:
        return <ExternalLink className="w-4 h-4" />
    }
  }

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Healthcare-focused mobile and web applications that make a real impact on people's lives
          </p>
        </div>

  

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-[color-mix(in_oklab,var(--primary)_20%,white)] flex items-center justify-center h-48">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--primary)] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-lg font-bold">{project.title.substring(0, 2).toUpperCase()}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-800">{project.title}</h3>
                </div>
                <div
                  className={`absolute inset-0 bg-[var(--primary)] bg-opacity-90 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-center text-white">
                    <h3 className="font-serif text-lg font-bold mb-1">{project.title}</h3>
                    <p className="text-sm opacity-90">
                      {project.role} • {project.year}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-[var(--primary)] font-medium mb-3">
                  {project.role} • {project.year}
                </p>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--primary)] hover:opacity-90 font-medium text-sm"
                >
                  {getIcon(project.type)}
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

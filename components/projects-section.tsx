"use client"

import { useState } from "react"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionShell } from "@/components/section-shell"
import { SectionHeader } from "@/components/section-header"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "HYMN BOOK",
    role: "Android Developer",
    year: "2020–2022",
    description:
      "Digital hymn book providing easy access to religious songs and worship materials for mobile users.",
    link: "https://play.google.com/store/apps/details?id=net.techandgraphics.hymn",
    tags: ["Android", "Kotlin"],
    featured: true,
    type: "playstore",
  },
  {
    id: 2,
    title: "FHIRCORE",
    role: "Software Engineer",
    year: "2022–2024",
    description:
      "Open-source Android framework for building FHIR-based healthcare applications. Collaborated with ONA team from Kenya to create scalable digital health solutions used across multiple countries.",
    link: "https://github.com/opensrp/fhircore/tree/mwcore-dev",
    tags: ["Android", "FHIR", "Kotlin", "Healthcare"],
    type: "github",
  },
  {
    id: 3,
    title: "Wastical",
    role: "Android Developer",
    year: "2024–2026",
    description:
      "Waste management platform for service providers and clients — track records, manage payment proofs, verify documents, and send automated payment reminders with secure phone OTP login.",
    link: "https://play.google.com/store/apps/details?id=net.techandgraphics.wastical",
    tags: ["Android", "Kotlin", "Business", "Waste Management"],
    type: "playstore",
  },
  {
    id: 4,
    title: "SilverCircle",
    role: "Full-Stack Developer",
    year: "2025–2026",
    description:
      "Official Android release portal for a secure social and discovery app — verified APK downloads and release notes.",
    link: "https://silvercirclemw.app/",
    tags: ["Web Development", "Android", "Distribution"],
    type: "website",
  },
  {
    id: 5,
    title: "Sama Tanjong",
    role: "Web Developer",
    year: "2025–2026",
    description:
      "Professional portfolio showcasing career statistics, highlights, news, trophies, and press materials for a sports figure.",
    link: "https://samatanjong.com/",
    tags: ["Web Development", "Portfolio", "Sports"],
    type: "website",
  },
  {
    id: 6,
    title: "Arch Holdings",
    role: "Web Developer",
    year: "2025–2026",
    description:
      "Corporate website for an investment group covering Agriculture, ICT, Construction, Food Processing, and Energy.",
    link: "https://archholdings.mw/",
    tags: ["Web Development", "Corporate", "Investment"],
    type: "website",
  },
  {
    id: 7,
    title: "Georgia TB Reference Guide",
    role: "Android Developer",
    year: "2020–2022",
    description:
      "Healthcare reference app for tuberculosis treatment guidelines, supporting healthcare workers in Georgia.",
    link: "https://play.google.com/store/apps/details?id=org.apphatchery.gatbreferenceguide",
    tags: ["Android", "Healthcare"],
    type: "playstore",
  },
  {
    id: 8,
    title: "TypeU",
    role: "Android Developer",
    year: "2020–2022",
    description: "Educational mobile app focused on diabetes management and patient education for Emory University.",
    link: "https://play.google.com/store/apps/details?id=edu.emory.diabetes.education",
    tags: ["Android", "Diabetes", "Education"],
    type: "playstore",
  },
  {
    id: 9,
    title: "OpenAMR",
    role: "Software Engineer",
    year: "2020–2022",
    description:
      "Open-source antimicrobial resistance surveillance system for tracking drug-resistant infections.",
    link: "https://github.com/global-health-informatics-institute/OpenAMR",
    tags: ["Python", "Healthcare"],
    type: "github",
  },
  {
    id: 10,
    title: "MAMALOVE",
    role: "Full-Stack Developer",
    year: "2020–2022",
    description:
      "Maternal health platform providing resources and support for expecting mothers and healthcare providers.",
    link: "https://mamalove.love",
    tags: ["Web", "Maternal Health"],
    type: "website",
  },
]

function getIcon(type: string) {
  if (type === "github") return <Github className="size-4" />
  return <ExternalLink className="size-4" />
}

export function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null)
  const featured = projects.find((p) => p.featured)!
  const rest = projects.filter((p) => !p.featured)

  return (
    <SectionShell id="projects" variant="muted" wide>
      <SectionHeader
        index="02"
        eyebrow="Selected work"
        title="Projects that ship care"
        description="Healthcare, Android, and web products — from open-source frameworks to client platforms."
      />

      {/* Featured card */}
      <a
        href={featured.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative mb-4 block overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-primary/40 md:p-12"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <Badge className="rounded-full bg-primary/10 text-primary hover:bg-primary/10">Featured</Badge>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {featured.year}
              </span>
            </div>
            <h3 className="font-serif text-4xl font-bold text-foreground md:text-5xl">{featured.title}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{featured.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-full px-3 py-1 text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex size-16 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="size-7" />
          </div>
        </div>
      </a>

      {/* Case-study rows */}
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        {rest.map((project, index) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row group flex flex-col gap-4 p-6 md:flex-row md:items-center md:gap-8 md:p-8"
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="font-serif text-4xl font-bold text-primary/25 transition-colors group-hover:text-primary md:w-16 md:shrink-0">
              {String(index + 2).padStart(2, "0")}
            </span>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary md:text-2xl">
                  {project.title}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {project.role} · {project.year}
                </span>
              </div>
              <p
                className={cn(
                  "mt-2 text-sm text-muted-foreground transition-all duration-300",
                  hovered === project.id ? "line-clamp-none" : "line-clamp-2"
                )}
              >
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:shrink-0">
              {getIcon(project.type)}
              <span className="hidden sm:inline">Open</span>
              <ArrowUpRight className="size-4" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="rounded-full" asChild>
          <a href="https://github.com/calmwalija" target="_blank" rel="noopener noreferrer">
            <Github className="size-4" />
            More on GitHub
          </a>
        </Button>
      </div>
    </SectionShell>
  )
}

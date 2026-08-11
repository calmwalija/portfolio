"use client"

import { useState } from "react"
import { Briefcase, ExternalLink, GraduationCap } from "lucide-react"
import { SectionShell } from "@/components/section-shell"
import { SectionHeader } from "@/components/section-header"
import { cn } from "@/lib/utils"

type Achievement = string | { label: string; href: string }

type TimelineEntry = {
  id: string
  period: string
  shortYear: string
  title: string
  subtitle: string
  description: string
  achievements: Achievement[]
  type: "experience" | "education"
}

const entries: TimelineEntry[] = [
  {
    id: "dtree",
    period: "Sep 2022 – Dec 2024",
    shortYear: "2024",
    title: "Software Engineer",
    subtitle: "D-Tree International",
    description:
      "Built mHealth Android applications with Kotlin and FHIR standards for maternal/child health and disease prevention, deployed for healthcare workers across Malawi and the USA in collaboration with the ONA team from Kenya.",
    achievements: [
      "Built scalable mobile features integrating REST APIs with secure health-data transmission",
      "Reduced critical production issues by 40% through rigorous bug tracking and fixes",
      "Shipped via CI/CD pipelines using Docker and Git for reliable, efficient releases",
      "Collaborated cross-functionally with product managers, designers, and healthcare domain experts",
    ],
    type: "experience",
  },
  {
    id: "ghi",
    period: "Jan 2020 – Sep 2022",
    shortYear: "2022",
    title: "Lead Application Developer",
    subtitle: "Global Health Informatics Institute (GHII)",
    description:
      "Led Android and web development for public health initiatives at GHII's AppHatchery studio — from TB care and diabetes education to maternal health platforms across Africa and the US.",
    achievements: [
      "Led the Georgia TB Reference Guide app — launched 2021, used by 500+ people annually in Georgia, USA",
      "Led development of the TypeU diabetes education app for Emory University",
      "Architected web apps with Laravel (PHP), integrating REST APIs for mobile data sync",
      "Directed UI/UX collaboration with designers in Figma and coordinated development teams",
    ],
    type: "experience",
  },
  {
    id: "tag",
    period: "2019 – Present",
    shortYear: "Now",
    title: "Software Engineer / Developer",
    subtitle: "Tech and Graphics (TAG)",
    description:
      "Independent software development initiative — free, open-source mobile apps for communities alongside client Android and web projects for local businesses.",
    achievements: [
      "Hymn Book: 100K+ downloads, 4.4★ rating, 174+ reviews on Google Play",
      "Multi-language support (English/Chichewa), theming, and data export/import",
      "Non-monetized, no ads or data sales — community-focused technology",
      "Delivered client work: Wastical, SilverCircle, Sama Tanjong, Arch Holdings",
    ],
    type: "experience",
  },
  {
    id: "education",
    period: "2015 – 2020",
    shortYear: "2020",
    title: "BSc Information & Communication Technology",
    subtitle: "Daeyang University",
    description:
      "Built foundational programming skills and earned industry certifications while completing a degree in ICT.",
    achievements: [
      "Graduated with BSc in Information & Communication Technology",
      {
        label: "Google Certified Associate Android Developer",
        href: "https://www.credential.net/29a3404e-5751-4667-9b9f-cb8a429f85b1",
      },
      {
        label: "Developing Android App with Kotlin certification",
        href: "https://www.udemy.com/certificate/UC-98321a01-fccb-47de-a79c-a66b55ab2e04/",
      },
    ],
    type: "education",
  },
]

export function JourneySection() {
  const [activeId, setActiveId] = useState(entries[0].id)
  const active = entries.find((e) => e.id === activeId)!

  return (
    <SectionShell id="journey" variant="muted">
      <SectionHeader
        index="03"
        eyebrow="Career"
        title="Where I've built"
        description="Seven years shipping healthtech and software across Africa — from university to international NGOs to independent client work."
      />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="flex gap-3 overflow-x-auto pb-2 lg:col-span-4 lg:flex-col lg:overflow-visible lg:pb-0">
          {entries.map((entry) => {
            const Icon = entry.type === "education" ? GraduationCap : Briefcase
            const isActive = activeId === entry.id
            return (
              <button
                key={entry.id}
                onClick={() => setActiveId(entry.id)}
                className={cn(
                  "group flex shrink-0 items-center gap-4 rounded-xl border px-5 py-5 text-left transition-all duration-300 lg:w-full",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "border-border bg-card hover:border-primary/40 hover:bg-muted"
                )}
              >
                <span
                  className={cn(
                    "font-serif text-3xl font-bold leading-none",
                    isActive ? "text-primary-foreground" : "text-primary/30 group-hover:text-primary"
                  )}
                >
                  {entry.shortYear}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <Icon
                      className={cn(
                        "size-3.5",
                        isActive ? "text-primary-foreground/80" : "text-primary"
                      )}
                    />
                    <p
                      className={cn(
                        "truncate text-sm font-semibold",
                        isActive ? "text-primary-foreground" : "text-foreground"
                      )}
                    >
                      {entry.subtitle}
                    </p>
                  </div>
                  <p
                    className={cn(
                      "mt-0.5 truncate text-xs",
                      isActive ? "text-primary-foreground/70" : "text-muted-foreground"
                    )}
                  >
                    {entry.period}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        <div className="lg:col-span-8">
          <div
            key={active.id}
            className="animate-fade-in-up rounded-2xl border border-border bg-card p-8 md:p-10"
          >
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {active.type === "education" ? "Education" : "Experience"}
                </p>
                <h3 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                  {active.title}
                </h3>
                <p className="mt-1 text-lg text-primary">{active.subtitle}</p>
              </div>
              <span className="rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
                {active.period}
              </span>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground">{active.description}</p>

            <div className="mt-8 border-t border-border pt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Highlights
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {active.achievements.map((item) => {
                  const isLink = typeof item !== "string"
                  return (
                    <li
                      key={isLink ? item.href : item}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {isLink ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 underline decoration-dotted underline-offset-4 transition-colors hover:text-primary"
                        >
                          {item.label}
                          <ExternalLink className="size-3 shrink-0" />
                        </a>
                      ) : (
                        item
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

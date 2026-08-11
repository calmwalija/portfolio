"use client"

import { useState } from "react"
import { Code2, GitBranch, ShieldCheck, Server } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SectionShell } from "@/components/section-shell"
import { SectionHeader } from "@/components/section-header"
import { LogoAndroid, LogoDjango, LogoFHIR, LogoKotlin, LogoKtor, LogoNextjs, LogoSQL } from "@/components/brand-logos"
import { cn } from "@/lib/utils"

type Skill = { name: string; description: string; level: number; examples?: string[] }
type SkillCategory = { key: string; title: string; icon: string; skills: Skill[] }

const skillCategories: SkillCategory[] = [
  {
    key: "engineering",
    title: "Mobile & Web",
    icon: "01",
    skills: [
      {
        name: "Android Development",
        description: "Native Android apps with focus on healthcare solutions",
        level: 95,
        examples: ["MVVM + Coroutines + Flows", "Jetpack (Navigation, Room, Hilt)", "Play Store releases & CI/CD"],
      },
      {
        name: "Next.js",
        description: "React framework for full-stack, production web apps",
        level: 85,
        examples: ["App Router & Server Components", "Static export & SSR", "Tailwind + shadcn/ui"],
      },
      {
        name: "Django",
        description: "Python web framework for rapid, secure backend development",
        level: 75,
        examples: ["ORM & migrations", "REST APIs", "Admin & auth"],
      },
      {
        name: "FHIR",
        description: "Healthcare data standards and interoperability",
        level: 85,
        examples: ["Resource modeling & validation", "Offline-first sync strategies", "Terminologies & CodeSystems"],
      },
      {
        name: "Ktor",
        description: "Kotlin framework for building connected applications",
        level: 75,
        examples: ["REST APIs & auth middleware", "Client/server with serialization", "Telemetry & structured logging"],
      },
    ],
  },
  {
    key: "languages",
    title: "Languages",
    icon: "02",
    skills: [
      {
        name: "Kotlin",
        description: "Primary language for Android development and backend services",
        level: 95,
        examples: ["Coroutines/Flows & structured concurrency", "Type-safe builders & DSLs", "Testing with JUnit + Kotest"],
      },
      {
        name: "SQL",
        description: "Database design, queries, and data management",
        level: 80,
        examples: ["Schema design & indexing", "Query optimization & EXPLAIN", "Migrations & data integrity"],
      },
    ],
  },
  {
    key: "tooling",
    title: "Tooling & Practices",
    icon: "03",
    skills: [
      {
        name: "Git & Collaboration",
        description: "Branching strategies, code reviews, and release workflows",
        level: 85,
        examples: ["PR reviews & conventions"],
      },
      {
        name: "CI/CD",
        description: "Automated builds, tests, and deployments",
        level: 75,
        examples: ["GitHub Actions", "Docker"],
      },
      {
        name: "Auth & IAM (Keycloak)",
        description: "Identity brokering, SSO, and OAuth2/OIDC flows",
        level: 80,
        examples: ["Realm & client configuration", "Roles & permissions", "Refresh tokens"],
      },
      {
        name: "Testing",
        description: "Robust test strategy across layers",
        level: 80,
        examples: ["Unit", "Mocking"],
      },
    ],
  },
]

const marqueeItems = [
  { name: "Android", icon: <LogoAndroid className="size-5" /> },
  { name: "Kotlin", icon: <LogoKotlin className="size-5" /> },
  { name: "Next.js", icon: <LogoNextjs className="size-5" /> },
  { name: "Django", icon: <LogoDjango className="size-5" /> },
  { name: "Ktor", icon: <LogoKtor className="size-5" /> },
  { name: "SQL", icon: <LogoSQL className="size-5" /> },
  { name: "FHIR", icon: <LogoFHIR className="size-5" /> },
  { name: "Git", icon: <GitBranch className="size-5" /> },
  { name: "CI/CD", icon: <Server className="size-5" /> },
  { name: "Keycloak", icon: <ShieldCheck className="size-5" /> },
  { name: "Testing", icon: <Code2 className="size-5" /> },
]

function getSkillIcon(name: string) {
  const lower = name.toLowerCase()
  if (lower.includes("android")) return <LogoAndroid className="size-8" />
  if (lower.includes("kotlin") && !lower.includes("ktor")) return <LogoKotlin className="size-8" />
  if (lower.includes("next")) return <LogoNextjs className="size-8" />
  if (lower.includes("django")) return <LogoDjango className="size-8" />
  if (lower.includes("ktor")) return <LogoKtor className="size-8" />
  if (lower.includes("fhir")) return <LogoFHIR className="size-8" />
  if (lower.includes("sql")) return <LogoSQL className="size-8" />
  if (lower.includes("git")) return <GitBranch className="size-8" />
  if (lower.includes("keycloak") || lower.includes("auth")) return <ShieldCheck className="size-8" />
  if (lower.includes("ci")) return <Server className="size-8" />
  return <Code2 className="size-8" />
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].key)
  const [activeSkill, setActiveSkill] = useState(skillCategories[0].skills[0].name)

  const category = skillCategories.find((c) => c.key === activeCategory)!
  const skill = category.skills.find((s) => s.name === activeSkill) ?? category.skills[0]

  const selectCategory = (key: string) => {
    const cat = skillCategories.find((c) => c.key === key)!
    setActiveCategory(key)
    setActiveSkill(cat.skills[0].name)
  }

  return (
    <SectionShell id="skills">
      <SectionHeader
        index="01"
        eyebrow="Capabilities"
        title="Skills & toolkit"
        description="Deep expertise across the Android stack and backend — pick a domain to explore."
      />

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Category rail */}
        <div className="flex gap-2 overflow-x-auto pb-2 lg:col-span-3 lg:flex-col lg:overflow-visible lg:pb-0">
          {skillCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => selectCategory(cat.key)}
              className={cn(
                "group flex shrink-0 items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-300",
                activeCategory === cat.key
                  ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "border-border bg-card hover:border-primary/40"
              )}
            >
              <span
                className={cn(
                  "font-serif text-2xl font-bold",
                  activeCategory === cat.key ? "text-primary-foreground/70" : "text-primary/40"
                )}
              >
                {cat.icon}
              </span>
              <span className="text-sm font-semibold">{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skill list */}
        <div className="lg:col-span-4">
          <div className="rounded-xl border border-border bg-card">
            {category.skills.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setActiveSkill(s.name)}
                className={cn(
                  "flex w-full items-center justify-between px-5 py-4 text-left transition-colors",
                  i < category.skills.length - 1 && "border-b border-border",
                  activeSkill === s.name ? "bg-muted" : "hover:bg-muted/50"
                )}
              >
                <span className="font-medium">{s.name}</span>
                <span
                  className={cn(
                    "font-serif text-lg font-bold",
                    activeSkill === s.name ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {s.level}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Spotlight panel */}
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8">
            <div className="mb-6 flex items-start justify-between">
              <div className="rounded-xl border border-border bg-muted p-4">
                {getSkillIcon(skill.name)}
              </div>
              <div className="text-right">
                <p className="font-serif text-5xl font-bold text-primary">{skill.level}%</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Proficiency</p>
              </div>
            </div>
            <h3 className="font-serif text-2xl font-bold">{skill.name}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{skill.description}</p>
            {skill.examples && (
              <div className="mt-6 flex flex-wrap gap-2">
                {skill.examples.map((ex) => (
                  <Badge key={ex} variant="outline" className="rounded-full px-3 py-1">
                    {ex}
                  </Badge>
                ))}
              </div>
            )}
            <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-16 overflow-hidden border-y border-border py-5">
        <div className="marquee-track gap-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item.name}-${i}`}
              className="flex shrink-0 items-center gap-2.5 px-4 text-sm font-medium text-muted-foreground"
            >
              {item.icon}
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

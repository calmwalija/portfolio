"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Code2, Smartphone, Database, GitBranch, ShieldCheck, Server } from "lucide-react"
import { LogoAndroid, LogoFHIR, LogoKotlin, LogoKtor, LogoSQL } from "@/components/brand-logos"

type Skill = { name: string; description: string; level: number; examples?: string[] }
type SkillCategory = { key: string; title: string; skills: Skill[] }

const skillCategories: SkillCategory[] = [
  {
    key: "engineering",
    title: "Mobile & Backend Development",
    skills: [
      {
        name: "Android Development",
        description: "Native Android apps with focus on healthcare solutions",
        level: 95,
        examples: [
          "MVVM + Coroutines + Flows",
          "Jetpack (Navigation, Room, Hilt)",
          "Play Store releases & CI/CD",
        ],
      },
      {
        name: "FHIR",
        description: "Healthcare data standards and interoperability",
        level: 85,
        examples: [
          "Resource modeling & validation",
          "Offline-first sync strategies",
          "Terminologies & CodeSystems",
        ],
      },
      {
        name: "Ktor",
        description: "Kotlin framework for building connected applications",
        level: 75,
        examples: [
          "REST APIs & auth middleware",
          "Client/server with serialization",
          "Telemetry & structured logging",
        ],
      },
    ],
  },
  {
    key: "languages",
    title: "Programming Languages",
    skills: [
      {
        name: "Kotlin",
        description: "Primary language for Android development and backend services",
        level: 95,
        examples: [
          "Coroutines/Flows & structured concurrency",
          "Type-safe builders & DSLs",
          "Testing with JUnit + Kotest",
        ],
      },
      {
        name: "SQL",
        description: "Database design, queries, and data management",
        level: 80,
        examples: [
          "Schema design & indexing",
          "Query optimization & EXPLAIN",
          "Migrations & data integrity",
        ],
      },
    ],
  },
  {
    key: "tooling",
    title: "Tooling & Practices",
    skills: [
      {
        name: "Git & Collaboration",
        description: "Branching strategies, code reviews, and release workflows",
        level: 85,
        examples: ["GitFlow & trunk-based", "PR reviews & conventions", "Semantic releases"],
      },
      {
        name: "CI/CD",
        description: "Automated builds, tests, and deployments",
        level: 75,
        examples: ["GitHub Actions", "Fastlane", "Caching & artifacts"],
      },
      {
        name: "Auth & IAM (Keycloak)",
        description: "Identity brokering, SSO, and OAuth2/OIDC flows",
        level: 80,
        examples: ["Realm & client configuration", "Roles & permissions", "PKCE & refresh tokens"],
      },
      {
        name: "Testing",
        description: "Robust test strategy across layers",
        level: 80,
        examples: ["Unit & instrumentation", "Snapshot & UI tests", "Mocking & fixtures"],
      },
    ],
  },
]

function getSkillBadge(name: string) {
  const base = "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-medium"
  const lower = name.toLowerCase()
  if (lower.includes("android")) return <span className={`${base} bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300`}>Android</span>
  if (lower.includes("kotlin") || lower.includes("ktor")) return <span className={`${base} bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300`}>Kotlin</span>
  if (lower.includes("sql")) return <span className={`${base} bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300`}>SQL</span>
  if (lower.includes("fhir")) return <span className={`${base} bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300`}>FHIR</span>
  return <span className={`${base} bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300`}>Skill</span>
}

function getSkillIcon(name: string) {
  const lower = name.toLowerCase()
  if (lower.includes("android")) return <LogoAndroid className="h-5 w-5" />
  if (lower.includes("kotlin") && !lower.includes("ktor")) return <LogoKotlin className="h-5 w-5" />
  if (lower.includes("ktor")) return <LogoKtor className="h-5 w-5" />
  if (lower.includes("fhir")) return <LogoFHIR className="h-5 w-5" />
  if (lower.includes("sql") || lower.includes("database")) return <LogoSQL className="h-5 w-5" />
  if (lower.includes("git")) return <GitBranch className="h-4 w-4" />
  if (lower.includes("keycloak") || lower.includes("oidc") || lower.includes("oauth") || lower.includes("auth")) return <ShieldCheck className="h-4 w-4" />
  if (lower.includes("ci") || lower.includes("devops")) return <Server className="h-4 w-4" />
  if (lower.includes("test")) return <ShieldCheck className="h-4 w-4" />
  return <Code2 className="h-4 w-4" />
}

function CategoryCard({ category, animate }: { category: SkillCategory; animate: boolean }) {
  const subtitle = category.skills.map((s) => s.name).join(" • ")
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mb-5 flex items-baseline justify-between">
        <h3 className="font-serif text-2xl font-bold">{category.title}</h3>
        <span className="text-xs text-slate-500 line-clamp-1 max-w-[60%] text-right">{subtitle}</span>
      </div>
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name} className="rounded-lg border border-slate-100 p-4 dark:border-slate-800/60">
            <div className="mb-2 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {getSkillIcon(skill.name)}
                <h4 className="font-medium">{skill.name}</h4>
              </div>
              <div className="flex items-center gap-2">
                {getSkillBadge(skill.name)}
                <span className="text-[11px] text-slate-500">{skill.level}%</span>
              </div>
            </div>
            <Progress value={animate ? skill.level : 0} className="h-2" />
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">{skill.description}</p>
            {skill.examples && (
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {skill.examples.map((ex) => (
                  <div key={`${skill.name}-${ex}`} className="flex items-start gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function SkillsSection() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setAnimate(true), 100)
    return () => clearTimeout(id)
  }, [])

  return (
    <section id="skills" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_400px_at_20%_20%,theme(colors.emerald.100/.6),transparent),radial-gradient(700px_300px_at_80%_10%,theme(colors.blue.100/.4),transparent)] dark:bg-[radial-gradient(900px_400px_at_20%_20%,theme(colors.emerald.700/.15),transparent),radial-gradient(700px_300px_at_80%_10%,theme(colors.blue.700/.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-300">
            Capabilities
          </span>
          <h2 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">Skills & toolkit</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            A focused stack across Android and backend to ship end‑to‑end.
          </p>
        </div>

          <div className="mb-8 grid gap-3 text-xs sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-3 text-center dark:border-slate-800 dark:bg-slate-900/40">
            <span className="block font-semibold">7+ years</span>
            <span className="text-slate-600 dark:text-slate-400">professional experience</span>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3 text-center dark:border-slate-800 dark:bg-slate-900/40">
              <span className="block font-semibold">Android + Kotlin</span>
              <span className="text-slate-600 dark:text-slate-400">Ktor, SQL, FHIR</span>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3 text-center dark:border-slate-800 dark:bg-slate-900/40">
            <span className="block font-semibold">Certifications</span>
            <span className="text-slate-600 dark:text-slate-400">Google AAD, Kotlin</span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <CategoryCard key={category.key} category={category} animate={animate} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/40">
          <div className="mb-3 text-sm font-medium text-slate-700 dark:text-slate-200">Toolbox</div>
          <div className="flex flex-wrap gap-2">
            {["Android", "Kotlin", "Ktor", "SQL", "FHIR", "Git", "CI/CD", "Testing"].map((name) => (
              <span
                key={`chip-${name}`}
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-300"
              >
                {name === "Android" && <LogoAndroid className="h-4 w-4" />}
                {name === "Kotlin" && <LogoKotlin className="h-4 w-4" />}
                {name === "Ktor" && <LogoKtor className="h-4 w-4" />}
                {name === "SQL" && <LogoSQL className="h-4 w-4" />}
                {name === "FHIR" && <LogoFHIR className="h-4 w-4" />}
                {name === "Git" && <GitBranch className="h-4 w-4" />}
                {name === "CI/CD" && <Server className="h-4 w-4" />}
                {name === "Testing" && <ShieldCheck className="h-4 w-4" />}
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

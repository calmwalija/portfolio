import Image from 'next/image'

export function HeroSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-20%,theme(colors.emerald.200/.6),transparent),radial-gradient(800px_400px_at_80%_20%,theme(colors.blue.200/.5),transparent)] dark:bg-[radial-gradient(1200px_600px_at_50%_-20%,theme(colors.emerald.600/.25),transparent),radial-gradient(800px_400px_at_80%_20%,theme(colors.blue.600/.2),transparent)]" />
      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-10 px-6 py-24 lg:grid-cols-2">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur dark:border-slate-700 dark:text-slate-300">
            Available for freelance & consulting
          </p>
          <h1 className="font-serif text-5xl leading-tight tracking-tight text-slate-900 md:text-6xl dark:text-white">
            Crafting modern healthtech products for impact
          </h1>
          <p className="mt-5 text-lg leading-7 text-slate-600 dark:text-slate-300">
            I’m Comfort, a software engineer focused on Android and digital health. I design and build accessible,
            performant experiences that scale in the real world.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center rounded-lg bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:opacity-90">
              View projects
            </a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
              Get in touch
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            <span>Android • Kotlin</span>
            <span>FHIR • Healthtech</span>
            <span>UX-minded engineering</span>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 shadow-2xl backdrop-blur md:ml-auto dark:border-slate-800">
            {/* Replace src with remote image URLs once provided */}
            <Image
              src={`${basePath}/placeholder.jpg`}
              alt="Comfort portrait"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 384px, 100vw"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

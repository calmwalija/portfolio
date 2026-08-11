import Image from "next/image"
import Link from "next/link"
import { ArrowDownRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

  return (
    <section id="about" className="relative min-h-[90vh] overflow-hidden border-b border-border">
      <div className="container-editorial grid min-h-[90vh] items-end gap-12 pb-16 pt-28 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-32">
        <div className="lg:col-span-7">
          <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <span className="inline-block size-2 rounded-full bg-primary" />
            Available for freelance & consulting
          </p>

          <h1 className="display-text animate-fade-in-up">
            Crafting{" "}
            <span className="text-primary">healthtech</span>
            <br />
            products for impact
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            I&apos;m Comfort — an Android engineer specializing in mHealth, building
            production-grade apps in Kotlin and FHIR for healthcare workers worldwide.
            My work ships to 500+ users annually across multiple countries.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" asChild className="rounded-full px-8">
              <Link href="#projects">
                View projects
                <ArrowDownRight className="size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8">
              <Link href="#contact">Get in touch</Link>
            </Button>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div>
              <dt className="font-serif text-3xl font-bold text-foreground">7+</dt>
              <dd className="mt-1 text-xs text-muted-foreground">Years experience</dd>
            </div>
            <div>
              <dt className="font-serif text-3xl font-bold text-foreground">10+</dt>
              <dd className="mt-1 text-xs text-muted-foreground">Products shipped</dd>
            </div>
            <div>
              <dt className="font-serif text-3xl font-bold text-foreground">2</dt>
              <dd className="mt-1 text-xs text-muted-foreground">Certifications</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-5 lg:col-start-8">
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <div className="absolute -inset-4 rounded-3xl border border-dashed border-primary/30" />
            <div className="absolute -right-3 -top-3 z-10 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
              Malawi · GMT+2
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
              <Image
                src={`${basePath}/1913ca096e16429a800cda19e5c91ba3.jpg`}
                alt="Comfort portrait"
                fill
                className="object-cover grayscale-[20%] transition-all duration-700 hover:grayscale-0"
                sizes="(min-width: 1024px) 420px, 100vw"
                priority
              />
            </div>
            <p className="mt-4 text-right text-xs uppercase tracking-widest text-muted-foreground">
              Android · Kotlin · FHIR
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

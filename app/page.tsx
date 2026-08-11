import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { JourneySection } from "@/components/journey-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

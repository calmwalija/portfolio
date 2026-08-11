import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  Music,
  Volleyball,
} from "lucide-react"
import { SectionShell } from "@/components/section-shell"

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "calmwalija@gmail.com",
    href: "mailto:calmwalija@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+265 993 563 408",
    href: "tel:+265993563408",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/calmwalija",
    href: "https://github.com/calmwalija",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/calmwalija",
    href: "https://www.linkedin.com/in/calmwalija",
    external: true,
  },
]

export function ContactSection() {
  return (
    <SectionShell id="contact">
      <div className="mb-14 md:mb-20">
        <p className="section-index mb-4" aria-hidden>
          04
        </p>
        <h2 className="display-text max-w-3xl">
          Let&apos;s build something{" "}
          <span className="text-primary">meaningful</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Open to freelance, consulting, and full-time roles in digital health.
          Based in Lilongwe, Malawi — working globally.
        </p>
      </div>

      {/* Contact link grid */}
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <link.icon className="size-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {link.label}
                </p>
                <p className="mt-0.5 font-medium text-foreground">{link.value}</p>
              </div>
            </div>
            <ArrowUpRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </a>
        ))}
      </div>

      {/* Location + interests band */}
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="flex items-center gap-4 rounded-2xl border border-border bg-muted/50 p-6 md:col-span-1">
          <MapPin className="size-5 shrink-0 text-primary" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Location</p>
            <p className="mt-0.5 text-sm font-medium">Lilongwe, Area 18, Malawi</p>
          </div>
        </div>

        <div className="flex items-center gap-6 rounded-2xl border border-border bg-muted/50 p-6 md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Beyond code</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Volleyball className="size-4 text-primary" />
            Volleyball
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Music className="size-4 text-primary" />
            Music
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

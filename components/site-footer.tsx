import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="container-editorial flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div>
          <p className="font-serif text-sm font-bold text-foreground">Comfort Mwalija</p>
          <p className="mt-1 text-xs text-muted-foreground">
            © {year} · Software engineer · Healthtech
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:calmwalija@gmail.com"
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Email"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="https://github.com/calmwalija"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/calmwalija"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-4" />
          </a>
          <Button variant="outline" size="icon" className="rounded-full" asChild>
            <a href="#about" aria-label="Back to top">
              <ArrowUp className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

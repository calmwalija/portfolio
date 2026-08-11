import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionShellProps = {
  id?: string
  variant?: "default" | "muted" | "inverted" | "full"
  className?: string
  children: ReactNode
  wide?: boolean
}

export function SectionShell({
  id,
  variant = "default",
  className,
  children,
  wide = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding relative overflow-hidden",
        variant === "muted" && "bg-muted/60",
        variant === "inverted" && "inverted-section",
        variant === "full" && "px-0",
        className
      )}
    >
      <div className={cn(wide ? "container-wide" : "container-editorial")}>
        {children}
      </div>
    </section>
  )
}

import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  index?: string
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  inverted?: boolean
  className?: string
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-20",
        align === "center" && "text-center",
        className
      )}
    >
      <div className={cn("flex items-end gap-6", align === "center" && "justify-center")}>
        {index && (
          <span
            className={cn(
              "section-index select-none",
              inverted && "text-background/20"
            )}
            aria-hidden
          >
            {index}
          </span>
        )}
        <div className={cn(index && "pb-2")}>
          {eyebrow && (
            <p
              className={cn(
                "mb-2 text-xs font-semibold uppercase tracking-[0.2em]",
                inverted ? "text-primary" : "text-primary"
              )}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className={cn(
              "font-serif text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",
              inverted ? "text-background" : "text-foreground"
            )}
          >
            {title}
          </h2>
        </div>
      </div>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-xl text-base leading-relaxed md:text-lg",
            inverted ? "text-muted-inverted" : "text-muted-foreground",
            align === "center" && "mx-auto",
            index && align === "left" && "ml-[calc(4.5rem+1.5rem)] md:ml-[calc(5rem+1.5rem)]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

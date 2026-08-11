import * as React from "react"

type LogoProps = {
  className?: string
  title?: string
}

export function LogoAndroid({ className = "h-5 w-5", title = "Android" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={!title} role={title ? "img" : undefined} className={className}>
      {title ? <title>{title}</title> : null}
      <g fill="#3DDC84">
        <path d="M7.4 4.4 6 2.6a.5.5 0 1 1 .8-.6l1.5 2a8 8 0 0 1 7.4 0l1.5-2a.5.5 0 0 1 .8.6l-1.4 1.8A7.9 7.9 0 0 1 12 3c-1.7 0-3.3.5-4.6 1.4Z"/>
        <circle cx="9" cy="7" r=".9" fill="#fff"/>
        <circle cx="15" cy="7" r=".9" fill="#fff"/>
        <rect x="4.5" y="8" width="15" height="10" rx="2"/>
        <rect x="2.5" y="9" width="2" height="6" rx="1"/>
        <rect x="19.5" y="9" width="2" height="6" rx="1"/>
      </g>
    </svg>
  )
}

export function LogoKotlin({ className = "h-5 w-5", title = "Kotlin" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={!title} role={title ? "img" : undefined} className={className}>
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id="kotlinGrad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7F52FF"/>
          <stop offset="1" stopColor="#FF8A00"/>
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="4" fill="url(#kotlinGrad)"/>
      <polygon points="12,12 24,24 0,24" fill="#00000022"/>
    </svg>
  )
}

export function LogoKtor({ className = "h-5 w-5", title = "Ktor" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={!title} role={title ? "img" : undefined} className={className}>
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id="ktorGrad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0A84FF"/>
          <stop offset="1" stopColor="#9453FF"/>
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="4" fill="#0b0b0f"/>
      <path d="M4 18 14 8l6 6-6 6Z" fill="url(#ktorGrad)"/>
      <path d="M4 6h10L4 16Z" fill="#58D3FF" opacity=".9"/>
    </svg>
  )
}

export function LogoSQL({ className = "h-5 w-5", title = "SQL" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={!title} role={title ? "img" : undefined} className={className}>
      {title ? <title>{title}</title> : null}
      <g fill="#2F6FED">
        <ellipse cx="12" cy="5.5" rx="8" ry="3.5"/>
        <path d="M4 5.5v9c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-9c0 1.9-3.6 3.5-8 3.5S4 7.4 4 5.5Z"/>
      </g>
      <ellipse cx="12" cy="5.5" rx="8" ry="3.5" fill="#fff" opacity=".15"/>
    </svg>
  )
}

export function LogoNextjs({ className = "h-5 w-5", title = "Next.js" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={!title} role={title ? "img" : undefined} className={className}>
      {title ? <title>{title}</title> : null}
      <circle cx="12" cy="12" r="12" fill="#000" />
      <path d="M9.5 8v8h1.3v-6.1L16 16h1.5V8h-1.3v6.1L11 8H9.5Z" fill="#fff" />
    </svg>
  )
}

export function LogoDjango({ className = "h-5 w-5", title = "Django" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={!title} role={title ? "img" : undefined} className={className}>
      {title ? <title>{title}</title> : null}
      <rect width="24" height="24" rx="4" fill="#092E20" />
      <path
        d="M10.6 5h2.7v9.3c-1.4.3-2.4.4-3.3.4-3.1 0-4.7-1.4-4.7-4 0-2.5 1.7-4.1 4.4-4.1.4 0 .7 0 1 .1V5Zm0 3.9c-.3-.1-.5-.1-.8-.1-1.3 0-2.1.8-2.1 2.2 0 1.4.8 2.1 2 2.1.3 0 .5 0 .9-.1V8.9Z"
        fill="#fff"
      />
      <path d="M17.4 8.4v6.7c0 2.3-.2 3.4-.7 4.4-.5.9-1.2 1.5-2.6 2.2L11.9 20c1.3-.6 2-1.3 2.4-2.1.5-1 .6-2.2.6-5.2V8.4h2.5Z" fill="#fff" />
      <circle cx="16.1" cy="5.6" r="1.4" fill="#fff" />
    </svg>
  )
}

export function LogoFHIR({ className = "h-5 w-5", title = "FHIR" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={!title} role={title ? "img" : undefined} className={className}>
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id="fhirGrad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F23F3F"/>
          <stop offset="1" stopColor="#FFA000"/>
        </linearGradient>
      </defs>
      <path d="M12 2s3 2 3 5c0 1.8-1 2.8-2 3.8 2-.3 5-1.3 5-4.8 2 2 4 8-3 12.5-5 3.1-10-.4-10-4.5 0-2.6 2.2-4.6 4.7-5.7C10.3 6.6 11 4.9 12 2Z" fill="url(#fhirGrad)"/>
    </svg>
  )
}




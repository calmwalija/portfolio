import type React from "react"
import type { Metadata, Viewport } from "next"
import { Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SITE_URL, withBasePath } from "@/lib/site"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

const description =
  "Software engineer focused on Android and digital health. Building accessible, performant healthtech products."

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EB5F14" },
    { media: "(prefers-color-scheme: dark)", color: "#F07028" },
  ],
  colorScheme: "light dark",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Comfort Mwalija — Portfolio",
    template: "%s · Comfort Mwalija",
  },
  description,
  applicationName: "Comfort Mwalija",
  authors: [{ name: "Comfort Mwalija", url: SITE_URL }],
  creator: "Comfort Mwalija",
  keywords: [
    "Comfort Mwalija",
    "software engineer",
    "Android",
    "Kotlin",
    "digital health",
    "healthtech",
    "FHIR",
    "portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Comfort Mwalija",
    title: "Comfort Mwalija — Portfolio",
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Comfort Mwalija — letter C brand mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comfort Mwalija — Portfolio",
    description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: withBasePath("/favicon.ico"), sizes: "any" },
      {
        url: withBasePath("/favicon-16x16.png"),
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: withBasePath("/favicon-32x32.png"),
        sizes: "32x32",
        type: "image/png",
      },
      { url: withBasePath("/brand/logo.svg"), type: "image/svg+xml" },
      { url: withBasePath("/icon.png"), type: "image/png" },
    ],
    apple: [
      {
        url: withBasePath("/apple-icon.png"),
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    title: "Comfort Mwalija",
    capable: true,
    statusBarStyle: "default",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

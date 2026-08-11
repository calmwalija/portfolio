import type { MetadataRoute } from "next"
import { withBasePath } from "@/lib/site"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Comfort Mwalija — Portfolio",
    short_name: "CM Portfolio",
    description:
      "Software engineer focused on Android and digital health. Building accessible, performant healthtech products.",
    start_url: withBasePath("/"),
    display: "standalone",
    background_color: "#FFF8F3",
    theme_color: "#EB5F14",
    icons: [
      {
        src: withBasePath("/brand/logo-192.png"),
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: withBasePath("/brand/logo-512.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: withBasePath("/brand/logo.svg"),
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  }
}

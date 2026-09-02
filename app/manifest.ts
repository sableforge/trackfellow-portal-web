import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TrackFellow",
    short_name: "TrackFellow",
    description: "The mobile field book for mantrailing and dog-tracking teams.",
    start_url: "/",
    display: "standalone",
    background_color: "#E4D8CE",
    theme_color: "#6D7935",
    icons: [
      { src: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  }
}

import { ImageResponse } from "next/og"

export const alt = "TrackFellow — the mobile field book for mantrailing and dog tracking"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#E4D8CE",
          color: "#2A3318",
          display: "flex",
          fontFamily: "sans-serif",
          height: "100%",
          justifyContent: "center",
          padding: "64px 80px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ background: "#E0B841", borderRadius: 999, height: 360, opacity: 0.34, position: "absolute", right: -70, top: -100, width: 360 }} />
        <div style={{ background: "#6D7935", borderRadius: 999, bottom: -150, height: 420, left: -120, opacity: 0.2, position: "absolute", width: 420 }} />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1040, width: "100%" }}>
          <div style={{ color: "#6D7935", display: "flex", fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>TrackFellow</div>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800, letterSpacing: -3, lineHeight: 1.05, marginTop: 40 }}>
            Train like a pro. Track like a fellow.
          </div>
          <div style={{ color: "#4F4434", display: "flex", fontSize: 28, lineHeight: 1.4, marginTop: 30 }}>
            GPS tracks, article markers, session feedback, and progress insights for dog-tracking teams.
          </div>
        </div>
      </div>
    ),
    size,
  )
}

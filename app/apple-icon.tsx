import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#020617",
        }}
      >
        <div
          style={{
            width: "132px",
            height: "132px",
            borderRadius: "34px",
            background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: "84px",
            fontWeight: 900,
            fontFamily: "sans-serif",
          }}
        >
          F
        </div>
      </div>
    ),
    { ...size }
  );
}

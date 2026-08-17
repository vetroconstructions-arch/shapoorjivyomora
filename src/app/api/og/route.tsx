import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || "Shapoorji Pallonji Joyville Vyomora";
    const subtitle = searchParams.get("subtitle") || "Luxury 2, 3 & 4 BHK Residences in Hinjewadi & Mahalunge, Pune";
    const badge = searchParams.get("badge") || "MahaRERA: PR1260002600999";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "#0A192F",
            padding: "80px",
            fontFamily: "sans-serif",
            backgroundImage: "radial-gradient(circle at 90% 10%, rgba(197, 160, 89, 0.25) 0%, transparent 60%)",
          }}
        >
          {/* Header Brand */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "36px", fontWeight: "bold", letterSpacing: "6px", color: "#FFFFFF" }}>
                VYOMORA
              </span>
              <span style={{ fontSize: "16px", letterSpacing: "4px", color: "#C5A059", textTransform: "uppercase", marginTop: "4px" }}>
                By Shapoorji Pallonji
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 20px",
                borderRadius: "30px",
                border: "1px solid rgba(197, 160, 89, 0.4)",
                backgroundColor: "rgba(197, 160, 89, 0.15)",
                color: "#C5A059",
                fontSize: "16px",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              {badge}
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "900px" }}>
            <h1
              style={{
                fontSize: "56px",
                fontWeight: "bold",
                color: "#FFFFFF",
                lineHeight: "1.2",
                margin: "0 0 20px 0",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "24px",
                color: "rgba(255, 255, 255, 0.75)",
                lineHeight: "1.4",
                margin: "0",
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Footer Features Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              paddingTop: "30px",
              borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            <div style={{ display: "flex", gap: "30px", color: "#C5A059", fontSize: "18px", fontWeight: "500" }}>
              <span>• 32,000+ sq. ft. Clubhouse</span>
              <span>• Rajiv Gandhi IT Park</span>
              <span>• 150+ Years Legacy</span>
            </div>
            <div style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "16px" }}>
              www.shapoorji-vyomora.com
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate OG image`, { status: 500 });
  }
}

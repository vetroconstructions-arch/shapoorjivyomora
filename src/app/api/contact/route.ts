import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // If honeypot is filled out, reject silently
    if (data._honey) {
      return NextResponse.json({ success: true, message: "OK" });
    }

    // Forward to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        access_key: "85fb0f24-6f7b-410a-936b-9f215ccdcacc",
        ...data,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      return NextResponse.json({ success: true, result });
    } else {
      console.error("Web3Forms error:", result);
      return NextResponse.json({ success: false, message: result.message || "Failed to submit form" }, { status: 400 });
    }
  } catch (error) {
    console.error("API Route error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

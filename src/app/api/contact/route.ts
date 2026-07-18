import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwfHvV9JAKt4MDrd-Pt_B8i_CBv94u66NXA8wi15_OGzR9P_dLYXCo7AOIFa1cwXVO26w/exec";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // If honeypot is filled out, reject silently
    if (data._honey) {
      return NextResponse.json({ success: true, message: "OK" });
    }

    // Forward to Google Apps Script Web App
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true, result });
    } else {
      console.error("Google Script error:", result);
      return NextResponse.json({ success: false, message: result.error || "Failed to submit form" }, { status: 400 });
    }
  } catch (error) {
    console.error("API Route error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

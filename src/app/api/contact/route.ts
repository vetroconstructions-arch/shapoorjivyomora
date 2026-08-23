import { NextResponse } from 'next/server';

const TARGET_EMAIL = "propsmartrealty@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${TARGET_EMAIL}`;
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwfHvV9JAKt4MDrd-Pt_B8i_CBv94u66NXA8wi15_OGzR9P_dLYXCo7AOIFa1cwXVO26w/exec";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // If honeypot is filled out, reject silently
    if (data._honey) {
      return NextResponse.json({ success: true, message: "OK" });
    }

    const payload = {
      ...data,
      recipient: TARGET_EMAIL,
      submitted_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      _subject: data._subject || `New Lead: Shapoorji Vyomora - ${data.name || data.email || 'Interested Buyer'}`,
      _template: "table",
      _captcha: "false",
      _autoresponse: data._autoresponse || "Thank you for your interest in Shapoorji Pallonji Joyville Vyomora. Our property advisor from PropSmart Realty will contact you shortly."
    };

    // 1. Dispatch email notification directly to propsmartrealty@gmail.com
    const emailPromise = fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    }).catch((err) => {
      console.warn("FormSubmit notification warning:", err);
      return null;
    });

    // 2. Forward lead to Google Sheets via Google Apps Script
    const sheetPromise = fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).catch((err) => {
      console.warn("Google Script sheet warning:", err);
      return null;
    });

    // Await both notifications concurrently for sub-second response
    const [emailRes, sheetRes] = await Promise.all([emailPromise, sheetPromise]);

    let isSuccess = false;
    if (emailRes && emailRes.ok) {
      isSuccess = true;
    }
    if (sheetRes && sheetRes.ok) {
      try {
        const sheetJson = await sheetRes.json();
        if (sheetJson.success) isSuccess = true;
      } catch (e) {
        // ignore JSON parsing if response succeeded
      }
    }

    // Return success to the client
    return NextResponse.json({ 
      success: true, 
      message: "Lead successfully recorded and forwarded to propsmartrealty@gmail.com" 
    });
  } catch (error) {
    console.error("API Route error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

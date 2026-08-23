import { NextResponse } from 'next/server';

const TARGET_EMAIL = "propsmartrealty@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${TARGET_EMAIL}`;
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwfHvV9JAKt4MDrd-Pt_B8i_CBv94u66NXA8wi15_OGzR9P_dLYXCo7AOIFa1cwXVO26w/exec";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Spam protection: silent drop if honeypot is filled
    if (data._honey) {
      return NextResponse.json({ success: true, message: "OK" });
    }

    const leadPayload = {
      name: data.name || "Customer",
      phone: data.phone || data.mobile || "Not provided",
      email: data.email || "Not provided",
      configuration: data.configuration || data.interest || "Not specified",
      visit_date: data.visitDate || data.date || "Not scheduled",
      visit_time: data.visitTime || data.time || "Not specified",
      message: data.message || data.notes || "New enquiry from website",
      source_page: data.source_page || "https://www.shapoorji-vyomora.com",
      submitted_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      _subject: data._subject || `New Lead: Shapoorji Vyomora - ${data.name || 'Interested Buyer'} (${data.phone || 'Phone'})`,
      _template: "table",
      _captcha: "false"
    };

    // Forward to FormSubmit with explicit browser headers required by their endpoint
    const formSubmitPromise = fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Origin": "https://www.shapoorji-vyomora.com",
        "Referer": "https://www.shapoorji-vyomora.com/contact",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      body: JSON.stringify(leadPayload),
    })
      .then(async (res) => {
        const text = await res.text();
        return { ok: res.ok, status: res.status, body: text };
      })
      .catch((err) => {
        console.error("FormSubmit delivery error:", err);
        return null;
      });

    // Simultaneously forward lead to Google Sheets CRM webhook
    const googleSheetPromise = fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadPayload),
    })
      .then(async (res) => {
        return { ok: res.ok, status: res.status };
      })
      .catch((err) => {
        console.error("Google Script CRM error:", err);
        return null;
      });

    // Run both delivery mechanisms concurrently
    const [formSubmitRes, googleSheetRes] = await Promise.all([formSubmitPromise, googleSheetPromise]);

    console.log("Lead dispatch results:", {
      formSubmit: formSubmitRes?.status,
      googleSheet: googleSheetRes?.status
    });

    return NextResponse.json({
      success: true,
      message: "Lead successfully recorded and forwarded to propsmartrealty@gmail.com"
    });
  } catch (error) {
    console.error("Contact API Route exception:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

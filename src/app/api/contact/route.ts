import { NextResponse } from 'next/server';

const TARGET_EMAIL = "propsmartrealty@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${TARGET_EMAIL}`;
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwfHvV9JAKt4MDrd-Pt_B8i_CBv94u66NXA8wi15_OGzR9P_dLYXCo7AOIFa1cwXVO26w/exec";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Strip internal/honeypot fields
    const { _honey, ...cleanData } = data;

    const leadName = cleanData.name?.trim() || "Interested Buyer";
    const leadPhone = cleanData.phone?.trim() || cleanData.mobile?.trim() || "Not provided";
    const leadEmail = cleanData.email?.trim() || "propsmartrealty@gmail.com";
    const leadConfig = cleanData.configuration || cleanData.interest || "Not specified";
    const visitDate = cleanData.visit_date || cleanData.visitDate || "Not scheduled";
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const leadPayload = {
      name: leadName,
      phone: leadPhone,
      email: leadEmail,
      configuration: leadConfig,
      visit_date: visitDate,
      message: cleanData.message || cleanData.notes || "New enquiry from website",
      project: "Shapoorji Pallonji Joyville Vyomora (Mahalunge-Hinjewadi)",
      submitted_at: timestamp,
      _subject: `New Lead: Shapoorji Vyomora - ${leadName} (${leadPhone})`,
      _template: "table",
      _captcha: "false"
    };

    // Forward to FormSubmit with explicit browser headers
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
        console.error("FormSubmit server dispatch error:", err);
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

    // Run both concurrently
    await Promise.all([formSubmitPromise, googleSheetPromise]);

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

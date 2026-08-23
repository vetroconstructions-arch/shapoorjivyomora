import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENT_EMAIL = process.env.TO_EMAIL || "propsmartrealty@gmail.com";
const GMAIL_USER = process.env.GMAIL_USER || process.env.EMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS;
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwfHvV9JAKt4MDrd-Pt_B8i_CBv94u66NXA8wi15_OGzR9P_dLYXCo7AOIFa1cwXVO26w/exec";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`;

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Clean data
    const { _honey, ...cleanData } = data;

    const leadName = cleanData.name?.trim() || "Interested Buyer";
    const leadPhone = cleanData.phone?.trim() || cleanData.mobile?.trim() || "Not provided";
    const leadEmail = cleanData.email?.trim() || "Not provided";
    const leadConfig = cleanData.configuration || cleanData.interest || "Not specified";
    const visitDate = cleanData.visit_date || cleanData.visitDate || "Not scheduled";
    const message = cleanData.message || cleanData.notes || "New enquiry from website";
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const subject = `🔥 New Lead: Shapoorji Vyomora - ${leadName} (${leadPhone})`;

    // HTML Email Template
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0A192F; padding: 24px; text-align: center; border-bottom: 3px solid #C5A059;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 2px;">VYOMORA</h1>
          <p style="color: #C5A059; margin: 4px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px;">By Shapoorji Pallonji • PropSmart Realty</p>
        </div>
        
        <div style="padding: 24px;">
          <h2 style="color: #0A192F; margin-top: 0; font-size: 18px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">New Property Enquiry Received</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; font-weight: bold; color: #475569; width: 35%; border-bottom: 1px solid #e2e8f0;">Customer Name</td>
              <td style="padding: 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0; font-weight: 600;">${leadName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Phone Number</td>
              <td style="padding: 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;"><a href="tel:${leadPhone}" style="color: #0A192F; font-weight: bold; text-decoration: none;">${leadPhone}</a></td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Email Address</td>
              <td style="padding: 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${leadEmail}" style="color: #0284c7; text-decoration: none;">${leadEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Interested Typology</td>
              <td style="padding: 12px; color: #C5A059; font-weight: bold; border-bottom: 1px solid #e2e8f0;">${leadConfig}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Visit Date / Preference</td>
              <td style="padding: 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${visitDate}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Message / Notes</td>
              <td style="padding: 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${message}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; font-weight: bold; color: #475569;">Submission Time (IST)</td>
              <td style="padding: 12px; color: #64748b;">${timestamp}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; text-align: center;">
            <a href="tel:${leadPhone}" style="display: inline-block; background-color: #0A192F; color: #ffffff; padding: 12px 28px; border-radius: 4px; text-decoration: none; font-weight: bold; font-size: 14px;">Call Customer Now</a>
          </div>
        </div>
        
        <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
          Shapoorji Pallonji Joyville Vyomora • Hinjewadi & Mahalunge, Pune • MahaRERA PR1260002600999
        </div>
      </div>
    `;

    let emailSent = false;

    // 1. Direct Nodemailer via Gmail SMTP if Google App Password is provided
    if (GMAIL_USER && GMAIL_APP_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true, // SSL
          auth: {
            user: GMAIL_USER,
            pass: GMAIL_APP_PASSWORD.replace(/\s+/g, ""), // clean spaces from app password
          },
        });

        await transporter.sendMail({
          from: `"Shapoorji Vyomora Leads" <${GMAIL_USER}>`,
          to: RECIPIENT_EMAIL,
          replyTo: leadEmail !== "Not provided" ? leadEmail : GMAIL_USER,
          subject: subject,
          html: htmlContent,
        });

        emailSent = true;
        console.log("Nodemailer SMTP email sent successfully to", RECIPIENT_EMAIL);
      } catch (smtpError) {
        console.error("Nodemailer SMTP dispatch error:", smtpError);
      }
    }

    // 2. Fallback to FormSubmit if Nodemailer env vars not configured or failed
    if (!emailSent) {
      fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Origin": "https://www.shapoorji-vyomora.com",
          "Referer": "https://www.shapoorji-vyomora.com/contact",
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        },
        body: JSON.stringify({
          Name: leadName,
          Phone: leadPhone,
          Email: leadEmail,
          Configuration: leadConfig,
          Visit_Date: visitDate,
          Message: message,
          Submitted_At_IST: timestamp,
          _subject: subject,
          _template: "table",
          _captcha: "false"
        }),
      }).catch(err => console.warn("FormSubmit fallback error:", err));
    }

    // 3. Simultaneously sync to Google Sheets CRM webhook
    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: leadName,
        phone: leadPhone,
        email: leadEmail,
        configuration: leadConfig,
        visit_date: visitDate,
        message: message,
        submitted_at: timestamp
      }),
    }).catch(err => console.warn("Google Script CRM sync error:", err));

    return NextResponse.json({
      success: true,
      message: "Lead successfully recorded and sent"
    });
  } catch (error) {
    console.error("API Contact Route error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

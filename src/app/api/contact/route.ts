import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, interest } = await req.json();

    // Validate inputs
    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure Nodemailer transporter
    // Note: To use Gmail in production, the client must provide an App Password for SMTP_PASSWORD
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER || 'propsmartrealty@gmail.com',
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER || 'propsmartrealty@gmail.com',
      to: 'propsmartrealty@gmail.com', // Explicitly hardcoded as per client request
      subject: `New Lead: Shapoorji Pallonji Vyomora - ${name}`,
      html: `
        <h2>New Enquiry for Shapoorji Pallonji Vyomora</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interested In:</strong> ${interest}</p>
        <br/>
        <p><small>This lead was generated from the Vyomora official landing page.</small></p>
      `,
    };

    // If SMTP_PASSWORD is not set, we'll just log it for now to prevent crashes during dev/build
    if (!process.env.SMTP_PASSWORD) {
      console.warn("SMTP_PASSWORD is not set. Email would have been sent to propsmartrealty@gmail.com:", mailOptions);
      return NextResponse.json({ success: true, message: 'Simulated email sent (Missing SMTP_PASSWORD)' }, { status: 200 });
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

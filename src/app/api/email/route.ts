
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, firstName, lastName } = body;

    const transporter = nodemailer.createTransport({
       host: 'smtp-relay.brevo.com', 
        port: 587, 
        secure: false, 
            auth: {
              user: process.env.NEXT_SMTP_USER,
              pass: process.env.NEXT_SMTP_PASS,
            },
          });

    await transporter.sendMail({
      from: 'temitopeoni001@gmail.com', 
      to: email,
      subject: 'Registration Confirmation',
      html: `<p>Dear ${firstName} ${lastName},</p>
             <p>Thank you for registering for the African Chiefs of Defense Staff Summit 2025.</p>
             <p>We look forward to seeing you!</p>`,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const response = "Hi there"

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
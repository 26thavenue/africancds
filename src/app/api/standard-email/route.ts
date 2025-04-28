import { NextResponse } from "next/server";
import {Resend} from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY!); 

export async function POST(request: Request) {
  const { email, subject, message } = await request.json();

  try {
    const emailResponse = await resend.emails.send({
      from: 'you@resend.com',  
      to: email,
      subject,
      text: message,
    });

    return NextResponse.json({ success: true, emailResponse });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

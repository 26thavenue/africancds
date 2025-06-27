import { NextResponse } from "next/server";
import {Resend} from "resend";
import { vendorTicketConfirmedEmail } from "@/app/components/ConfirmVendorEmailTemplate";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY!); 

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    const emailResponse = await resend.emails.send({
      from: 'ACDSS <no-reply@acdss.com.ng>',  
      to: email,
      subject: vendorTicketConfirmedEmail.subject,
      html: vendorTicketConfirmedEmail.html,
    });

    return NextResponse.json({ success: true, emailResponse });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

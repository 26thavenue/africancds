import { NextResponse } from "next/server";
import { Resend } from "resend";
import { exhibitorTicketEmail, participantTicketEmail, sponsorTicketEmail } from "@/app/components/MultipleEmailTemplate";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY!); 

const EmailTemplates: Record<string, { subject: string; html: string }> = {
  "Exhibitor": exhibitorTicketEmail,
  "Sponsor": sponsorTicketEmail,
  "Participant": participantTicketEmail,
};

export async function POST(request: Request) {
  const { email, emailType } = await request.json();


 
  const template = EmailTemplates[emailType];

  if (!template) {
    return NextResponse.json(
      { success: false, error: "Invalid email type" },
      { status: 400 }
    );
  }

  try {
    const emailResponse = await resend.emails.send({
      from: 'ACDS <no-reply@acdss.com.ng>',  
      to: email,
      subject: template.subject,
      html: template.html,
    });

    return NextResponse.json({ success: true, emailResponse });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

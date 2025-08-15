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

    if(emailType == 'Exhibitor'){
      await resend.emails.send({
        from: "ACDS <no-reply@acdss.com.ng>",
        to:'exhibition@acdss.com.ng',
        subject:"You have an Exhibitor",
        html:`<h2>New Exhibitor Registration</h2>

        <p>Hello Admin,</p>

        <p>A new exhibitor has registered for the exhibition.</p>

        <p>Please go to the admin portal to check out the details and process their application.</p>

        <p>Registration Type: Exhibitor</p>
        <p>Status: Pending Review</p>

        <p>Best regards,<br>
        ACDS System</p>`
      })
    }

    return NextResponse.json({ success: true, emailResponse });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormRequest {
  parentName: string;
  phone: string;
  email: string;
  childAge: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      throw new Error("Email service is not configured");
    }

    const recipientEmail = Deno.env.get("CONTACT_FORM_RECIPIENT_EMAIL");
    if (!recipientEmail) {
      console.error("CONTACT_FORM_RECIPIENT_EMAIL is not configured");
      throw new Error("Recipient email is not configured");
    }

    const { parentName, phone, email, childAge, message }: ContactFormRequest = await req.json();

    // Validate required fields
    if (!parentName || !phone || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: parentName, phone, email, and message are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate field lengths
    if (parentName.length > 100 || phone.length > 20 || email.length > 255 || message.length > 2000) {
      return new Response(
        JSON.stringify({ error: "One or more fields exceed maximum length" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const resend = new Resend(resendApiKey);

    const emailResponse = await resend.emails.send({
      from: "VELC Enquiry <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: `New Enquiry from ${parentName}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2d5a27; border-bottom: 2px solid #2d5a27; padding-bottom: 10px;">
            New Admission Enquiry
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; width: 140px; vertical-align: top;">Parent's Name:</td>
              <td style="padding: 10px; color: #333;">${parentName}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Phone:</td>
              <td style="padding: 10px; color: #333;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Email:</td>
              <td style="padding: 10px; color: #333;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Child's Age:</td>
              <td style="padding: 10px; color: #333;">${childAge || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
              <td style="padding: 10px; color: #333; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>

          <p style="margin-top: 30px; font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 10px;">
            This enquiry was submitted via the VELC website contact form.
          </p>
        </div>
      `,
    });

    console.log("Contact form email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-form function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send enquiry" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);

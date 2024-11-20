"use server";

import { Resend } from "resend";
import { WaitlistEmail } from "../../emails/waitlist-confirm";

const resend = new Resend(process.env.RESEND_API_KEY);

type State = { error: string } | { data: string };

export async function send(
  prevState: State,
  formData: FormData
): Promise<State> {
  // Validate environment variables
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not defined in environment variables.");
  }
  if (!process.env.SENDER_NAME || !process.env.SENDER_EMAIL) {
    throw new Error(
      "SENDER_NAME or SENDER_EMAIL is not defined in environment variables."
    );
  }

  // Extract and validate email
  const email = formData.get("email") as string;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Invalid email address." };
  }

  try {
    // Send email
    const { data, error } = await resend.emails.send({
      from: `${process.env.SENDER_NAME} <${process.env.SENDER_EMAIL}>`,
      to: [email],
      subject: "🎉 You’re on the List! Welcome to Waitlist 🚀",
      react: WaitlistEmail({ email } as WaitlistEmailProps), // Pass email prop to the component
    });

    if (error) {
      console.error("Failed to send email:", error);
      return { error: `Failed to send email: ${error.message}` };
    }

    console.log("Email sent successfully:", data);
    return { data: "Email sent!" };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { error: "An unexpected error occurred while sending the email." };
  }
}

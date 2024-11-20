import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface WaitlistEmailProps {
  userEmail?: string;
}

export const WaitlistEmail = ({
  userEmail = "no-reply@workwhales.com",
}: WaitlistEmailProps) => {
  // Fetching customizable values from environment variables
  const socialLink =
    process.env.NEXT_PUBLIC_SOCIAL_LINK || "https://twitter.com/yourstartup";
  const companyName =
    process.env.NEXT_PUBLIC_COMPANY_NAME || "Your Company Name";
  const companyAddress =
    process.env.NEXT_PUBLIC_COMPANY_ADDRESS ||
    "123 Startup Street, Tech Valley, CA 94103";

  const previewText = "Welcome! You're on the Waitlist";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body
          className="bg-neutral-50 font-sans"
          style={{
            backgroundColor: "#F9FAFB",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <Container
            className="mx-auto py-20 px-10"
            style={{
              maxWidth: "600px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Section>
              <Heading
                className="text-2xl font-bold text-center text-neutral-800 mb-4"
                style={{
                  fontSize: "24px",
                  marginBottom: "16px",
                  textAlign: "center",
                  color: "#1F2937",
                }}
              >
                🚀 Welcome to the Waitlist!
              </Heading>
              <Text
                className="text-neutral-600 mb-4 text-base leading-6"
                style={{
                  color: "#4B5563",
                  fontSize: "16px",
                  marginBottom: "16px",
                }}
              >
                Hey there,
              </Text>
              <Text
                className="text-neutral-600 mb-4 text-base leading-6"
                style={{
                  color: "#4B5563",
                  fontSize: "16px",
                  marginBottom: "16px",
                }}
              >
                Thank you for joining our waitlist! We're thrilled to have you
                as one of our early supporters. You're now officially in line to
                be among the first to experience our revolutionary development
                platform.
              </Text>
              <Text
                className="text-neutral-600 mb-6 text-base leading-6"
                style={{
                  color: "#4B5563",
                  fontSize: "16px",
                  marginBottom: "24px",
                }}
              >
                Here's what you can expect:
              </Text>
              <Section className="mb-6">
                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    marginBottom: "24px",
                  }}
                >
                  <li
                    style={{
                      marginBottom: "8px",
                      color: "#4B5563",
                      fontSize: "16px",
                    }}
                  >
                    ✨ Early access to our platform
                  </li>
                  <li
                    style={{
                      marginBottom: "8px",
                      color: "#4B5563",
                      fontSize: "16px",
                    }}
                  >
                    📢 Exclusive updates about our progress
                  </li>
                  <li
                    style={{
                      marginBottom: "8px",
                      color: "#4B5563",
                      fontSize: "16px",
                    }}
                  >
                    🎯 Special founding member benefits
                  </li>
                </ul>
              </Section>
              <Text
                className="text-neutral-600 mb-6 text-base leading-6"
                style={{
                  color: "#4B5563",
                  fontSize: "16px",
                  marginBottom: "24px",
                }}
              >
                We'll keep you updated on our progress and let you know as soon
                as we're ready to launch. In the meantime, follow us on social
                media for the latest updates:
              </Text>
              <Section className="text-center mb-8">
                <Button
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-6 py-3 font-semibold text-base"
                  href={socialLink}
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(to right, #6366F1, #8B5CF6)",
                    color: "#FFFFFF",
                    padding: "12px 24px",
                    borderRadius: "9999px",
                    fontSize: "16px",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  Follow us on Twitter
                </Button>
              </Section>
              <Hr
                className="border-neutral-200 my-6"
                style={{ borderColor: "#E5E7EB", margin: "24px 0" }}
              />
              <Text
                className="text-neutral-500 text-sm text-center"
                style={{
                  fontSize: "14px",
                  color: "#9CA3AF",
                  textAlign: "center",
                  marginBottom: "16px",
                }}
              >
                You're receiving this email because you signed up for our
                waitlist with {userEmail}. If you didn't request this, you can
                safely ignore this email.
              </Text>
              <Text
                className="text-neutral-400 text-xs text-center"
                style={{
                  fontSize: "12px",
                  color: "#D1D5DB",
                  textAlign: "center",
                  marginTop: "16px",
                }}
              >
                © 2024 {companyName}. All rights reserved.
                <br />
                {companyAddress}
              </Text>
              <Text
                className="text-neutral-400 text-xs text-center mt-4"
                style={{
                  fontSize: "12px",
                  color: "#D1D5DB",
                  textAlign: "center",
                  marginTop: "16px",
                }}
              >
                <Link
                  href="#"
                  className="text-indigo-500 hover:text-indigo-600"
                  style={{ color: "#6366F1", textDecoration: "underline" }}
                >
                  Unsubscribe
                </Link>{" "}
                •{" "}
                <Link
                  href="#"
                  className="text-indigo-500 hover:text-indigo-600"
                  style={{ color: "#6366F1", textDecoration: "underline" }}
                >
                  Privacy Policy
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WaitlistEmail;

import "dotenv/config";
import cors from "cors";
import express, {
  type Request,
  type Response,
} from "express";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = Number(
  process.env.PORT ?? process.env.API_PORT ?? 3001
);

const DIST_DIR = path.resolve(__dirname, "../dist");

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 587);
const SMTP_SECURE = process.env.SMTP_SECURE === "true";
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const SMTP_FROM = process.env.SMTP_FROM;

const SEND_TO =
  process.env.SEND_TO ||
  "saitoti@cybertroveafrica.com";

const RECIPIENTS = SEND_TO.split(",")
  .map((email) => email.trim())
  .filter(Boolean);

type AssessmentData = {
  name: string;
  email: string;
  company: string;
  website: string;
  industry: string;
  message: string;
};

const requiredEnvironmentVariables = [
  ["SMTP_HOST", SMTP_HOST],
  ["SMTP_PORT", process.env.SMTP_PORT],
  ["SMTP_USER", SMTP_USER],
  ["SMTP_PASSWORD", SMTP_PASSWORD],
  ["SMTP_FROM", SMTP_FROM],
  ["SEND_TO", SEND_TO],
] as const;

const missingVariables = requiredEnvironmentVariables
  .filter(([, value]) => !value)
  .map(([name]) => name);

if (missingVariables.length > 0) {
  console.error(
    `Missing environment variables: ${missingVariables.join(", ")}`
  );
  process.exit(1);
}

if (SMTP_PORT === 465 && !SMTP_SECURE) {
  console.error(
    "SMTP_PORT is 465, but SMTP_SECURE is not true."
  );
  process.exit(1);
}

if (SMTP_PORT !== 465 && SMTP_SECURE) {
  console.error(
    "SMTP_SECURE should normally be false when SMTP_PORT is 587 or 25."
  );
  process.exit(1);
}

app.set("trust proxy", 1);

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://cybertroveafrica.com",
      "https://www.cybertroveafrica.com",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: false,
  })
);

app.use(express.json({ limit: "20kb" }));

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    error:
      "Too many assessment requests. Please try again later.",
  },
});

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
});

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidWebsite(website: string): boolean {
  try {
    const parsedUrl = new URL(website);

    return (
      parsedUrl.protocol === "http:" ||
      parsedUrl.protocol === "https:"
    );
  } catch {
    return false;
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getFormData(
  body: Partial<AssessmentData> = {}
): AssessmentData {
  return {
    name: String(body.name ?? "").trim(),
    email: String(body.email ?? "").trim(),
    company: String(body.company ?? "").trim(),
    website: String(body.website ?? "").trim(),
    industry: String(body.industry ?? "").trim(),
    message: String(body.message ?? "").trim(),
  };
}

app.get(
  "/health",
  (_request: Request, response: Response) => {
    response.status(200).json({
      success: true,
      message: "CyberTrove API is running.",
    });
  }
);

app.post(
  "/api/security-assessment",
  formLimiter,
  async (request: Request, response: Response) => {
    console.log(
      "Received security assessment request from:",
      request.ip
    );

    try {
      const data = getFormData(
        request.body as Partial<AssessmentData>
      );

      if (data.name.length < 2 || data.name.length > 100) {
        return response.status(400).json({
          error: "Please enter a valid full name.",
        });
      }

      if (!isValidEmail(data.email)) {
        return response.status(400).json({
          error: "Please enter a valid email address.",
        });
      }

      if (!isValidWebsite(data.website)) {
        return response.status(400).json({
          error: "Please enter a valid website URL.",
        });
      }

      if (data.company.length > 150) {
        return response.status(400).json({
          error: "Company name is too long.",
        });
      }

      if (data.industry.length > 80) {
        return response.status(400).json({
          error: "Industry value is too long.",
        });
      }

      if (data.message.length > 3000) {
        return response.status(400).json({
          error:
            "Additional details must be fewer than 3,000 characters.",
        });
      }

      const textMessage = `
New CyberTrove security assessment request

Full name: ${data.name}
Email address: ${data.email}
Company: ${data.company || "Not provided"}
Website: ${data.website}
Industry: ${data.industry || "Not provided"}

Additional details:
${data.message || "Not provided"}
`.trim();

      const htmlMessage = `
<div style="font-family: Arial, sans-serif; line-height: 1.6;">
  <h2>New CyberTrove Security Assessment Request</h2>

  <p>
    <strong>Full name:</strong>
    ${escapeHtml(data.name)}
  </p>

  <p>
    <strong>Email address:</strong>
    ${escapeHtml(data.email)}
  </p>

  <p>
    <strong>Company:</strong>
    ${escapeHtml(data.company || "Not provided")}
  </p>

  <p>
    <strong>Website:</strong>
    <a href="${escapeHtml(data.website)}">
      ${escapeHtml(data.website)}
    </a>
  </p>

  <p>
    <strong>Industry:</strong>
    ${escapeHtml(data.industry || "Not provided")}
  </p>

  <h3>Additional details</h3>

  <p>
    ${escapeHtml(
      data.message || "Not provided"
    ).replace(/\n/g, "<br />")}
  </p>
</div>
`;

      const emailInfo = await transporter.sendMail({
        from: SMTP_FROM,
        to: RECIPIENTS,
        replyTo: data.email,
        subject: `New Security Assessment Request${
          data.company ? ` - ${data.company}` : ""
        }`,
        text: textMessage,
        html: htmlMessage,
      });

      console.log("Email sent successfully.");
      console.log("Message ID:", emailInfo.messageId);
      console.log(
        "Recipients:",
        RECIPIENTS.join(", ")
      );

      return response.status(201).json({
        success: true,
        message:
          "Your assessment request was sent successfully.",
      });
    } catch (error) {
      console.error("Email sending failed:", error);

      return response.status(500).json({
        error:
          "The email could not be sent. Check the API logs.",
      });
    }
  }
);

app.use(express.static(DIST_DIR));

/*
  Express 5:
  Do not use app.get("*", ...).
  Use a named wildcard instead.
*/
app.get(
  "/{*splat}",
  (
    _request: Request,
    response: Response
  ) => {
    response.sendFile(
      path.join(DIST_DIR, "index.html"),
      (error) => {
        if (error) {
          console.error(
            "Frontend build not found:",
            error.message
          );

          if (!response.headersSent) {
            response.status(404).json({
              error: "Frontend build not found.",
            });
          }
        }
      }
    );
  }
);

async function startServer(): Promise<void> {
  try {
    await transporter.verify();

    console.log(
      "SMTP connection verified successfully."
    );
    console.log(`SMTP host: ${SMTP_HOST}`);
    console.log(`SMTP port: ${SMTP_PORT}`);
    console.log(`SMTP secure: ${SMTP_SECURE}`);
    console.log(`SMTP user: ${SMTP_USER}`);
    console.log(
      `Recipients: ${RECIPIENTS.join(", ")}`
    );

    app.listen(PORT, "0.0.0.0", () => {
      console.log(
        `CyberTrove API running on port ${PORT}`
      );
    });
  } catch (error) {
    console.error("SMTP verification failed.");
    console.error(error);
    console.error(
      "Check SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASSWORD, and SMTP_FROM."
    );
    process.exit(1);
  }
}

startServer();
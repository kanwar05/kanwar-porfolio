import ContactMessage from "../models/ContactMessage.js";
import { sendContactNotification } from "../services/mailer.js";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function createContactMessage(req, res, next) {
  try {
    const fields = ["name", "email", "subject", "message"];
    const payload = Object.fromEntries(
      fields.map((field) => [field, String(req.body[field] || "").trim()]),
    );

    if (fields.some((field) => !payload[field])) {
      return res.status(400).json({
        success: false,
        message: "Name, email, subject, and message are required.",
      });
    }

    if (!emailPattern.test(payload.email)) {
      return res.status(400).json({ success: false, message: "Enter a valid email address." });
    }

    if (
      payload.name.length > 80 ||
      payload.email.length > 120 ||
      payload.subject.length > 120 ||
      payload.message.length < 10 ||
      payload.message.length > 3000
    ) {
      return res.status(400).json({
        success: false,
        message: "Please check the field lengths and try again.",
      });
    }

    const contact = await ContactMessage.create(payload);

    try {
      await sendContactNotification(contact);
    } catch (mailError) {
      console.error("Email notification failed:", mailError.message);
    }

    return res.status(201).json({
      success: true,
      message: "Thanks — your message has been received.",
    });
  } catch (error) {
    return next(error);
  }
}

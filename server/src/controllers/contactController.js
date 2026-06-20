import ContactMessage from "../models/ContactMessage.js";
import { sendContactNotification } from "../services/mailer.js";
import { contactSchema, firstValidationError } from "../utils/validation.js";

export async function createContactMessage(req, res, next) {
  try {
    const result = contactSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: firstValidationError(result.error),
      });
    }

    const contact = await ContactMessage.create(result.data);

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

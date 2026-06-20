import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(80),
  email: z.string().trim().email("Enter a valid email address.").max(120),
  subject: z.string().trim().min(1, "Subject is required.").max(120),
  message: z.string().trim().min(10, "Message must be at least 10 characters.").max(3000),
});

export const adminLoginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8).max(200),
});

export const messageStatusSchema = z.object({
  status: z.enum(["new", "read", "replied", "archived"]),
});

export function firstValidationError(error) {
  return error.issues?.[0]?.message || "Invalid request.";
}

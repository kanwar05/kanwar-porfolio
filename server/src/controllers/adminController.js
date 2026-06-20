import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import ContactMessage from "../models/ContactMessage.js";
import {
  adminLoginSchema,
  firstValidationError,
  messageStatusSchema,
} from "../utils/validation.js";

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export async function loginAdmin(req, res, next) {
  try {
    const result = adminLoginSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: firstValidationError(result.error),
      });
    }

    if (!process.env.JWT_SECRET || !process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD_HASH) {
      return res.status(503).json({
        success: false,
        message: "Admin authentication is not configured.",
      });
    }

    const emailMatches =
      result.data.email.toLowerCase() === process.env.ADMIN_EMAIL.toLowerCase();
    const passwordMatches = emailMatches
      ? await bcrypt.compare(result.data.password, process.env.ADMIN_PASSWORD_HASH)
      : false;

    if (!emailMatches || !passwordMatches) {
      return res.status(401).json({ success: false, message: "Invalid email or password." });
    }

    const token = jwt.sign(
      { role: "admin", email: process.env.ADMIN_EMAIL },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "8h" },
    );

    return res.json({
      success: true,
      token,
      admin: { email: process.env.ADMIN_EMAIL },
    });
  } catch (error) {
    return next(error);
  }
}

export async function getMessages(req, res, next) {
  try {
    const page = Math.max(Number.parseInt(req.query.page, 10) || 1, 1);
    const limit = Math.min(Math.max(Number.parseInt(req.query.limit, 10) || 10, 1), 50);
    const status = req.query.status;
    const search = String(req.query.search || "").trim();
    const filter = {};

    if (status && ["new", "read", "replied", "archived"].includes(status)) {
      filter.status = status;
    }

    if (search) {
      const pattern = new RegExp(escapeRegex(search), "i");
      filter.$or = [{ name: pattern }, { email: pattern }, { subject: pattern }];
    }

    const [messages, total] = await Promise.all([
      ContactMessage.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      ContactMessage.countDocuments(filter),
    ]);

    return res.json({
      success: true,
      messages,
      pagination: {
        page,
        limit,
        total,
        pages: Math.max(Math.ceil(total / limit), 1),
      },
    });
  } catch (error) {
    return next(error);
  }
}

export async function updateMessageStatus(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "Invalid message ID." });
    }

    const result = messageStatusSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: firstValidationError(result.error),
      });
    }

    const message = await ContactMessage.findByIdAndUpdate(
      req.params.id,
      { status: result.data.status },
      { new: true, runValidators: true },
    );

    if (!message) {
      return res.status(404).json({ success: false, message: "Message not found." });
    }

    return res.json({ success: true, message });
  } catch (error) {
    return next(error);
  }
}

export async function deleteMessage(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, message: "Invalid message ID." });
    }

    const message = await ContactMessage.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ success: false, message: "Message not found." });
    }

    return res.json({ success: true, message: "Message deleted." });
  } catch (error) {
    return next(error);
  }
}

export async function getMessageStats(_req, res, next) {
  try {
    const startOfMonth = new Date();
    startOfMonth.setUTCDate(1);
    startOfMonth.setUTCHours(0, 0, 0, 0);

    const [total, fresh, replied, thisMonth, byStatus] = await Promise.all([
      ContactMessage.countDocuments(),
      ContactMessage.countDocuments({ status: "new" }),
      ContactMessage.countDocuments({ status: "replied" }),
      ContactMessage.countDocuments({ createdAt: { $gte: startOfMonth } }),
      ContactMessage.aggregate([
        { $group: { _id: "$status", count: { $sum: 1 } } },
        { $project: { _id: 0, status: "$_id", count: 1 } },
      ]),
    ]);

    return res.json({
      success: true,
      stats: { total, new: fresh, replied, thisMonth, byStatus },
    });
  } catch (error) {
    return next(error);
  }
}

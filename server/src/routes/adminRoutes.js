import { Router } from "express";
import {
  deleteMessage,
  getMessages,
  getMessageStats,
  loginAdmin,
  updateMessageStatus,
} from "../controllers/adminController.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

router.post("/login", loginAdmin);
router.use(requireAdmin);
router.get("/messages", getMessages);
router.get("/messages/stats", getMessageStats);
router.patch("/messages/:id/status", updateMessageStatus);
router.delete("/messages/:id", deleteMessage);

export default router;

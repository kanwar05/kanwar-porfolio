import { Router } from "express";
import { githubProfile } from "../controllers/githubController.js";

const router = Router();
router.get("/profile", githubProfile);

export default router;

/**
 * user.routes.js — User listing for the chat UI
 *
 * Mounted at /api/users in server.js
 * Used to populate the sidebar with everyone except the logged-in user.
 */

import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

// GET /api/users — all users except the current one (no passwords)
router.get("/", protectRoute, getUsersForSidebar);

export default router;

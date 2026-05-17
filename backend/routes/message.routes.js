/**
 * message.routes.js — Messaging endpoints
 *
 * Mounted at /api/messages in server.js
 * All routes use protectRoute — client must send a valid jwt cookie.
 */

import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

// GET /api/messages/:id — messages between logged-in user and user :id
router.get("/:id", protectRoute, getMessages);

// POST /api/messages/send/:id — send a message to user :id
router.post("/send/:id", protectRoute, sendMessage);

export default router;

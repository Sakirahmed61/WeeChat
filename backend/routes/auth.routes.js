/**
 * auth.routes.js — Authentication endpoints
 *
 * Mounted at /api/auth in server.js
 * Does not use protectRoute — signup/login must work without a token.
 */

import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// POST /api/auth/signup — register, hash password, set JWT cookie
router.post("/signup", signup);

// POST /api/auth/login — verify credentials, set JWT cookie
router.post("/login", login);

// POST /api/auth/logout — clear JWT cookie
router.post("/logout", logout);

export default router;

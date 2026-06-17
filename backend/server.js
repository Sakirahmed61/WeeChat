/**
 * server.js — Application entry point
 *
 * Boots Express, applies middleware, mounts API routers, and starts listening.
 * Environment variables are loaded from the project root .env via dotenv.
 */

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

// Load PORT, MONGO_DB_URI, JWT_SECRET, etc. from .env
dotenv.config();

const PORT = process.env.PORT || 5000;

// --- Middleware ---
// Parse JSON bodies (req.body) for POST/PUT requests
app.use(express.json());
// Read the "jwt" cookie on each request (used by protectRoute)
app.use(cookieParser());

// --- API routes ---
// Auth: signup, login, logout — sets/clears JWT cookie
app.use("/api/auth", authRoutes);
// Messages: send and list messages in a conversation (protected)
app.use("/api/message", messageRoutes);
// Users: list other users for the chat sidebar (protected)
app.use("/api/users", userRoutes);

// Health check — quick way to confirm the server is up
app.get("/", (req, res) => {
  res.send("server connected");
});

// Start HTTP server, then connect to MongoDB
server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on port ${PORT}`);
});

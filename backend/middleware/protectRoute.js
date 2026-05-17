/**
 * protectRoute.js — Auth middleware
 *
 * Runs before protected routes (messages, users).
 * Reads jwt from cookies, verifies it, loads the user, and sets req.user.
 * Controllers then use req.user._id as the logged-in user.
 */

import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      res.status(401).json({ error: "unauthorized - No token provided" });
    }

    // Throws if token is invalid or expired
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      res.status(401).json({ error: "unauthorized - invalid token" });
    }

    // Attach user to request (password field excluded)
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      res.status(401).json({ error: "No user Found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in ProtectRoute Middleware: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectRoute;

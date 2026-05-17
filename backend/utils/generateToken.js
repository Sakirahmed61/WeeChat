/**
 * generateToken.js — JWT creation and httpOnly cookie
 *
 * Signs a token with JWT_SECRET from .env and attaches it as cookie "jwt".
 * Used after successful signup and login.
 */

import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  // Payload: { userId } — verified later in protectRoute
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, // Not readable from browser JavaScript (XSS safety)
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    sameSite: "strict", // Cookie only sent on same-site requests
    secure: process.env.NODE_ENV !== "development", // HTTPS only in production
  });

  return token;
};

export default generateTokenAndSetCookie;

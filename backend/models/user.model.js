/**
 * user.model.js — User schema and model
 *
 * Collection: users
 * Used by auth (signup/login), protectRoute, and the users sidebar API.
 */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // Display name shown in the UI
    fullname: {
      type: String,
      required: true,
    },
    // Unique login identifier
    username: {
      type: String,
      required: true,
      unique: true,
    },
    // Bcrypt hash only — never store plain text
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    // Avatar URL (e.g. generated on signup via ui-avatars.com)
    profilePic: {
      type: String,
      default: "",
    },
  },
  {
    // Adds createdAt and updatedAt automatically
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;

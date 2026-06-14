/**
 * auth.controller.js — Sign up, log in, log out
 *
 * Handles user registration and session cookies (JWT via generateToken.js).
 * Passwords are hashed with bcrypt; responses never include the password field.
 */

import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

/**
 * POST /api/auth/signup
 * Body: fullname, username, password, confirmPassword, gender
 */
export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Default avatar from display name (ui-avatars.com)
    const name = fullname;
    const editedName = name.trim().replace(" ", "+");
    const profilePic = `https://ui-avatars.com/api/?name=${editedName}`;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      gender: typeof gender === "string" ? gender.toLowerCase() : gender,
      profilePic,
    });

    if (newUser) {
      // Issue JWT before save so client can authenticate immediately
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ message: "invalid user data" });
    }
  } catch (error) {
    console.error("error in signup controller:", error.message);
    res.status(500).json({ message: error.message || "Server error" });
  }
};

/**
 * POST /api/auth/login
 * Body: username, password
 */
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error("error in login controller:", error.message);
    res.status(500).json({ message: error.message || "Server error" });
  }
};

/**
 * POST /api/auth/logout
 * Clears the jwt cookie by setting maxAge to 0
 */
export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "user Logged out" });
  } catch (error) {
    console.error("error in logout controller:", error.message);
    res.status(500).json({ message: error.message || "Server error" });
  }
};

/**
 * user.controller.js — User list for the chat sidebar
 *
 * Returns every user except the one currently logged in.
 * Passwords are excluded via .select("-password").
 */

import User from "../models/user.model.js";

/**
 * GET /api/users
 * Requires protectRoute — uses req.user._id from JWT
 */
export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // $ne = not equal — omit the current user from the list
    const allUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(allUsers);
  } catch (error) {
    console.log("error in getUsersForSidebar controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

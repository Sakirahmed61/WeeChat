/**
 * conversation.model.js — Chat thread between two users
 *
 * Collection: conversations
 * Links two participants and holds an array of Message ObjectIds.
 * One conversation exists per pair of users (created on first message).
 */

import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    // Exactly two User IDs in this chat (sender + receiver)
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // Ordered list of Message documents in this thread
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;

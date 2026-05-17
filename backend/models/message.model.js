/**
 * message.model.js — Single chat message
 *
 * Collection: messages
 * Each document is one text message from senderId to receiverId.
 * Message IDs are stored on a Conversation (see conversation.model.js).
 */

import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    // User who sent the message (ref → users collection)
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // User who receives the message
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Message text content
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;

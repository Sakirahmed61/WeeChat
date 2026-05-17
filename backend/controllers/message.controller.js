/**
 * message.controller.js — Send and fetch messages
 *
 * Works with Conversation + Message models.
 * req.user comes from protectRoute (logged-in sender).
 */

import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

/**
 * POST /api/messages/send/:id
 * Body: { message }
 * :id = receiver's user id
 */
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    // console.log("Message Sent")

    // Find existing 1-to-1 conversation between these two users
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // First message between this pair — create a new conversation
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // const safeReq = {
    //   params: req.params,
    //   query: req.query,
    //   body: req.body,
    //   user: req.user,
    //   headers: req.headers,
    // };

    // console.log(JSON.stringify(safeReq, null, 2)); // should always be commented!

    // Save conversation and message together (parallel)
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("error in sendMessage controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

/**
 * GET /api/messages/:id
 * :id = other user's id — returns all messages in that conversation
 */
export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    // No conversation yet — empty chat
    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("error in getMessages controller:", error.message);
    res.status(500).json({ error: "Internal server error:" });
  }
};

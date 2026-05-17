/**
 * connectToMongoDB.js — Database connection
 *
 * Opens a single Mongoose connection using MONGO_DB_URI from .env.
 * Called once when the server starts (see server.js).
 */

import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to mongoDB");
  } catch (error) {
    // Log failure; Express may still be listening on PORT
    console.log("error connecting to mongoDB", error.message);
  }
};

export default connectToMongoDB;

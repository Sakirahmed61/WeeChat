/**
 * test.js — Standalone MongoDB connection test
 *
 * Run manually to verify Atlas/network (not used by server.js).
 * The app should use MONGO_DB_URI in .env via connectToMongoDB.js instead.
 */

import mongoose from "mongoose";

const uri =
  "mongodb://ahmedian365_db_user:ytIlwCCNeNe6Ec4j@ac-nqy5imp-shard-00-00.s4ehktb.mongodb.net:27017,ac-nqy5imp-shard-00-01.s4ehktb.mongodb.net:27017,ac-nqy5imp-shard-00-02.s4ehktb.mongodb.net:27017/?ssl=true&replicaSet=atlas-bys965-shard-0&authSource=admin&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("CONNECTED");
    process.exit();
  })
  .catch((err) => {
    console.log(err);
  });

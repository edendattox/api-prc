import mongoose from "mongoose";

import { app } from "./index.js";

const port = process.env.PORT || 4000;

const { SALT, JWT_KEY, MONGO_URI } = process.env;

const start = async () => {
  if (!SALT) {
    throw new Error("SALT must be provided");
  }

  if (!JWT_KEY) {
    throw new Error("JWT_KEY must be provided");
  }

  if (!MONGO_URI) {
    throw new Error("MONGO_URI must be provided");
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }

  app.listen(port, () => {
    console.log(`[app] = Listening on port ${port}`);
  });
};

start();

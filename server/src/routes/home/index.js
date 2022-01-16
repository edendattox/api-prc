import express from "express";
import { currentUser } from "../../middleware/currentUser.js";

const router = express.Router();

router.get("/api/welcome", currentUser, (req, res) => {
  res.status(200).send("Welcome 🙌");
});

export { router as homeRouter };

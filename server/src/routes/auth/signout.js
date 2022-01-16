import express from "express";
import { validateRequest } from "../../middleware/verifyToken.js";

const router = express.Router();

router.post("/api/user/signout", validateRequest, (req, res) => {
  req.header.token = null;
  res.send({});
});

export { router as signoutRouter };

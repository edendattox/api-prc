import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../../models/User.js";
import { body, validationResult } from "express-validator";
import { Password } from "../../services/password.js";

const router = express.Router();

router.post(
  "/api/user/signin",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must provide a password"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    !user && res.status(401).json("Wrong credentials!");

    const passwordMatch = await Password.compare(user.password, password);

    if (!passwordMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      process.env.JWT_KEY,
      { expiresIn: "3d" }
    );

    res.status(200).json({ user, token });
  }
);

export { router as signinRouter };

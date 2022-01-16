import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../../models/User.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/api/user/signup",
  [
    body("firstname").notEmpty().withMessage("firstname must be provided"),
    body("lastname").notEmpty().withMessage("lastname must be provided"),
    body("email").isEmail().withMessage("Email must be valid"),
    body("address").notEmpty().withMessage("address must be provided"),
    body("password")
      .notEmpty()
      .withMessage("password must be provided")
      .isLength({ min: 8 })
      .withMessage("password must be at least 5 characters")
      .matches(/\d/)
      .withMessage("must contain a number"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { firstname, lastname, email, phone, address, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: "User Already Exist" });
    }

    const user = new User({
      firstname,
      lastname,
      email,
      phone,
      address,
      password,
    });
    await user.save();

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

    res.status(201).json({ user, token });
  }
);

export { router as signupRouter };

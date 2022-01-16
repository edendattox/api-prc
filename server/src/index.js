import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();

/**
 * Auth Routes
 */
import { currentUserRouter } from "./routes/auth/currentUser.js";
import { signinRouter } from "./routes/auth/signin.js";
import { signoutRouter } from "./routes/auth/signout.js";
import { signupRouter } from "./routes/auth/signup.js";

/**
 * Home Routes
 */
import { homeRouter } from "./routes/home/index.js";

app.use(cors());
app.use(express.json());

/**
 * Routers
 */

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(homeRouter);

/**
 *  Create error for the route that does'nt exits.
 *  app.all gonna watch for any type of method for req
 */
app.all("*", async (req, res) => {
  throw new Error("404 page not found");
});

export { app };

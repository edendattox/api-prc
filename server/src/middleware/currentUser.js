import jwt from "jsonwebtoken";

export const currentUser = (req, res, next) => {
  const authToken = req.headers["authorization"];
  const token = authToken.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "You are not allowed" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_KEY);
    req.currentUser = payload;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

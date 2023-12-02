import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const Auth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: "No Token" });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: "Token Expires" });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        next();
      } else {
        console.log("why");
        return res.json({ status: "NO USER" });
      }
    }
  });
};

import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import Userrouter from "./router/userrouter.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors(
    {
    // origin: "https://rablo-round3.vercel.app",
    origin:"https://codequst-app.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  }
  )
);
app.use("/api", Userrouter);
const port = 8000;
const db = process.env.DB;
mongoose
  .connect(db)
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(port, () => {
  console.log("started");
});

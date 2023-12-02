import express from "express";
import {
  Login,
  Register,
  Verify,
} from "../controller/usercontroller.js";
import { Auth } from "../middleware/AuthMiddleware.js";

const router = express.Router();
router.post("/", Verify);
router.post("/login", Login);
router.post("/register", Register);

export default router;

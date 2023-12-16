import express from "express";
import {
  Login,
  Register,
  Verify,
  fetchSection
} from "../controller/usercontroller.js";
import { Auth } from "../middleware/AuthMiddleware.js";

const router = express.Router();
router.post("/", Verify);
router.post("/login", Login);
router.post("/signup", Register);
router.get('/fetchsections/:id',fetchSection)

export default router;

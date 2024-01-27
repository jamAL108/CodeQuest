import express from "express";
import {
  Login,
  Register,
  fetchSection
} from "../controller/usercontroller.js";

const router = express.Router();
router.post("/login", Login);
router.post("/signup", Register);
router.get('/fetchsections/:id',fetchSection)

export default router;

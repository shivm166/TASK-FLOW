import express from "express";
import {
  getprofile,
  loginUser,
  registerUser,
} from "../controllers/userController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.post("/registerUser", registerUser);
router.post("/loginUser", loginUser);
router.post("/logoutUser", loginUser);
router.get("/getprofile/:id", authMiddleware, getprofile);
export default router;

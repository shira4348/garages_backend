import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
} from "../controllers/authController";

const router = express.Router();

// Define the routes and link them to controller functions
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getUserProfile);

export default router;

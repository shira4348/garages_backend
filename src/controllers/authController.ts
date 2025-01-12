import { Request, Response } from "express";
import {
  authenticateUser,
  createUser,
  fetchUserProfile,
} from "../services/authService";

// Handles user registration
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const message = await createUser(username, email, password);

    res.status(201).json({ message });
  } catch (error: any) {
    res
      .status(400)
      .json({ error: error.message || "Failed to register user." });
  }
};

// Handles user login
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const token = await authenticateUser(email, password);

    res.status(200).json({ token });
  } catch (error: any) {
    res.status(400).json({ error: error.message || "Failed to log in." });
  }
};

// Handles retrieving the user profile
export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      res.status(401).json({ error: "Unauthorized. No token provided." });
      return;
    }

    const userProfile = await fetchUserProfile(token);

    res.status(200).json(userProfile);
  } catch (error: any) {
    res.status(401).json({ error: error.message || "Unauthorized." });
  }
};

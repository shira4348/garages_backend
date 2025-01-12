import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/user";

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

// Creates a new user
export const createUser = async (
  username: string,
  email: string,
  password: string
): Promise<string> => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser: IUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  return "User registered successfully.";
};

// Authenticates a user and generates a JWT token
export const authenticateUser = async (
  email: string,
  password: string
): Promise<string> => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found.");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials.");
  }

  const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  return token;
};

// Fetches the user's profile using a JWT token
export const fetchUserProfile = async (
  token: string
): Promise<IUser | null> => {
  const decoded = jwt.verify(token, SECRET_KEY) as { id: string };

  const user = await User.findById(decoded.id).select("-password");
  if (!user) {
    throw new Error("User not found.");
  }

  return user;
};

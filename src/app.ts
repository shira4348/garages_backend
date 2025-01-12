import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./db/connect";
import garageRoutes from "./routes/garageRoutes";
import authRoutes from "./routes/auth";
import { authMiddleware } from "./middlewares/authMiddleware";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

app.use((req, res, next) => {
  if (req.path.startsWith("/api/auth")) {
    next();
  } else {
    authMiddleware(req, res, next);
  }
});

app.use("/api/garages", garageRoutes);

connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

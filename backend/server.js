import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable CORS for all routes
app.use(cors());

// Define the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Connect to the database and then start the server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(
      "Failed to connect to the database or start the server:",
      error
    );
    process.exit(1); // Exit with a failure code
  }
};

startServer();

// Basic home route
app.get("/", (req, res) => {
  res.send("Hellow....");
});

// User routes
app.use("/user/api/v1", userRoute);

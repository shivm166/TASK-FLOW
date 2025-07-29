import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to TaskFlow API");
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
  connectDB();
});

app.use("/api/users", route);

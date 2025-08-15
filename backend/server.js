import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Runnning on PORT = ${PORT}`);
  connectDB();
});

app.get("/", (req, res) => {
  res.send("hellow ....");
});

app.use("/user/api/vi", userRoute);

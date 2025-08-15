import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGOURL = process.env.MONGO_URI;

const connectDB = async () => {
  await mongoose
    .connect(MONGOURL)
    .then(() => {
      console.log("Mongodb Connected...");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;

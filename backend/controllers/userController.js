import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(200).json({ message: "User Already Exist..." });
    }

    const hashpassword = bcrypt.hash(10, password);
    const userRegister = await User.create({
      name,
      email,
      password: hashpassword,
    });
    res
      .status(200)
      .json({ userRegister, message: "Registration Successfully Complate" });
  } catch (error) {
    res.status(400).json({ error: "Internal Server Error.." });
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(200).json({ message: "Email is incorrect..." });
    }
    const ispassmatch = bcrypt.compare({ password: User.passsword });
    if (!ispassmatch) {
      return res.status(400).json({ error: "Password is incorrect...." });
    }
  } catch (error) {
    res.status(400).json({ error: "Internal Server Error.." });
    console.log(error);
  }
};

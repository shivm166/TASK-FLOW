import bcrypt from "bcrypt";
import User from "../models/userModel.js";
// import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body || {};
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      // Use 409 Conflict and a clear message for existing users.
      return res
        .status(409)
        .json({ message: "User with this email already exists." });
    }

    // Correctly await the hashing process.
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user with the hashed password.
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Create a user object without the password to send back.
    // The `_doc` property of a Mongoose document contains the raw data.
    const userWithoutPassword = { ...newUser._doc };
    delete userWithoutPassword.password;

    // Send a 201 Created status and the new user object without the password.
    res.status(201).json({
      user: userWithoutPassword,
      message: "Registration completed successfully.",
    });
  } catch (error) {
    console.error("Registration error:", error);
    // Return a generic, safe error message to the client.
    res
      .status(500)
      .json({ error: "An unexpected error occurred. Please try again." });
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

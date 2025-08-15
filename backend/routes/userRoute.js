import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
// import { loginvalidate, registervalidate } from "../middelware/validation.js";

const route = express.Router();

route.post("/registerUser", registerUser);
// route.post("/loginUser", loginvalidate, loginUser);
export default route;

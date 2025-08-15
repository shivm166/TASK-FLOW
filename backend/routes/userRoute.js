import express from "express";
import { loginUser, registerUser } from "../controllers/userController";
import { loginvalidate, registervalidate } from "../middelware/validation";

const route = express.Router();

route.post("/registerUser", registervalidate, registerUser);
// route.post("/loginUser", loginvalidate, loginUser);
export default route;

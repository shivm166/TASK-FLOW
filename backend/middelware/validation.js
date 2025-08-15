import joi from "joi";
import User from "../models/userModel.js";

export const registervalidate = async (req, res, next) => {
  const schema = joi.object({
    name: joi.string().min(6).max(15).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).max(15).required(),
  });

  try {
    await schema.validateAsync(req.body);

    next();
  } catch (error) {
    console.error("Joi validation error:", error.details);
    res.status(400).json({
      message: error.details[0].message,
    });
  }
};

export const loginvalidate = async (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).max(15).required(),
  });

  try {
    await schema.validateAsync(req.body);

    next();
  } catch (error) {
    console.error("Joi validation error:", error.details);
    res.status(400).json({
      message: error.details[0].message,
    });
  }
};

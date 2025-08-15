import express from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request object
    const getUser = req.user.id; // Assuming user ID is stored in the token
    req.user.id = getUser; // Ensure user ID is accessible in the request
    req.user.email = decoded.email; // Attach email if needed
    req.user.name = decoded.name; // Attach name if needed

    next();
  } catch (error) {
    console.error("JWT verification error:", error);
    return res.status(403).json({ message: "Invalid token" });
  }
};

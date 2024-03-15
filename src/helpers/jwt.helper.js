import jwt from "jsonwebtoken";
import * as config from "../utils/config.util.js";

const JWT_SECRET_KEY = config.get("JWT_SECRET_KEY");
const JWT_EXPIRY_TIME = config.get("JWT_EXPIRY_TIME"); // in days e.g 1d, 2d...

export const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: JWT_EXPIRY_TIME });
};

export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET_KEY);
};

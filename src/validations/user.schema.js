import Joi from "joi";
import { EMAIL_REGEX } from "../constants/regex.constant.js";

export const registerUserSchema = Joi.object({
  username: Joi.string().min(3).max(10).required().messages({
    "string.min": "Username should have minimum length of 3",
    "string.max": "Username should have maximum length of 10",
    "any.required": "Username is required",
    "string.base": "Username should be a string",
  }),
  email: Joi.string().regex(EMAIL_REGEX).required().messages({
    "string.pattern.base": "Email should be valid mail id.",
    "any.required": "Email is required",
    "string.base": "Email should be a string",
  }),
  password: Joi.string().min(8).max(20).required().messages({
    "string.min": "Password should have minimum length of 8",
    "string.max": "Password should have maximum length of 20",
    "any.required": "Password is required",
    "string.base": "Password should be a string",
  }),
});

export const loginUserSchema = Joi.object({
  usernameOrEmail: Joi.string().required(),
  password: Joi.string().min(8).max(20).required().messages({
    "string.min": "Invalid password.",
    "string.max": "Invalid password.",
    "any.required": "Invalid password.",
    "string.base": "Invalid password.",
  }),
});

export const usernameSchema = Joi.object({
  username: Joi.string().min(3).max(10).required().messages({
    "string.min": "Invalid username.",
    "string.max": "Invalid username.",
    "any.required": "Invalid username.",
    "string.base": "Invalid username.",
  }),
});

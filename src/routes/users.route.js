import { Router } from "express";
import * as userController from "../controllers/users.controller.js";
import { asyncWrapper } from "../utils/async-wrapper.util.js";
import {
  validateBody,
  validateParams,
} from "../middlewares/validation.middleware.js";
import {
  loginUserSchema,
  registerUserSchema,
  usernameSchema,
} from "../validations/user.schema.js";

export const userRouter = Router();

userRouter.post(
  "/",
  validateBody(registerUserSchema),
  asyncWrapper(userController.registerUser)
);
userRouter.post(
  "/login",
  validateBody(loginUserSchema),
  asyncWrapper(userController.loginUser)
);
userRouter.get(
  "/:username/books",
  validateParams(usernameSchema),
  asyncWrapper(userController.getUserBorrowedBooks)
);

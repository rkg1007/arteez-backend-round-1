import { Router } from "express";
import * as userController from "../controllers/users.controller.js";
import { asyncWrapper } from "../utils/async-wrapper.util.js";

export const userRouter = Router();

userRouter.post("/", asyncWrapper(userController.registerUser));
userRouter.post("/login", asyncWrapper(userController.loginUser));
userRouter.get(
  "/:username/books",
  asyncWrapper(userController.getUserBorrowedBooks)
);

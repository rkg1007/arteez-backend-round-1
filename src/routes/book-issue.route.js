import { Router } from "express";
import * as bookIssueController from "../controllers/book-issue.controller.js";
import { asyncWrapper } from "../utils/async-wrapper.util.js";
import { validateParams } from "../middlewares/validation.middleware.js";
import { bookIssueSchema } from "../validations/book-issue.schema.js";

export const bookIssueRouter = Router();

bookIssueRouter.post(
  "/borrow/:isbn/:username",
  validateParams(bookIssueSchema),
  asyncWrapper(bookIssueController.issueBook)
);
bookIssueRouter.post(
  "/return/:isbn/:username",
  validateParams(bookIssueSchema),
  asyncWrapper(bookIssueController.returnBook)
);

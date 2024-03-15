import { Router } from "express";
import * as bookIssueController from "../controllers/book-issue.controller.js";
import { asyncWrapper } from "../utils/async-wrapper.util.js";

export const bookIssueRouter = Router();

bookIssueRouter.post(
  "/borrow/:isbn/:username",
  asyncWrapper(bookIssueController.issueBook)
);
bookIssueRouter.post(
  "/return/:isbn/:username",
  asyncWrapper(bookIssueController.returnBook)
);

import { Router } from "express";
import { userRouter } from "./users.route.js";
import { bookRouter } from "./books.route.js";
import { bookIssueRouter } from "./book-issue.route.js";

export const apiRouter = Router();

apiRouter.use("/users", userRouter);
apiRouter.use("/books", bookRouter);
apiRouter.use(bookIssueRouter);

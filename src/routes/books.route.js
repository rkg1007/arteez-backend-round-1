import { Router } from "express";
import * as bookController from "../controllers/books.controller.js";
import { asyncWrapper } from "../utils/async-wrapper.util.js";
import { validateBody } from "../middlewares/validation.middleware.js";
import { addBookSchema } from "../validations/book.schema.js";

export const bookRouter = Router();

bookRouter.post(
  "/",
  validateBody(addBookSchema),
  asyncWrapper(bookController.addBook)
);
bookRouter.get("/", asyncWrapper(bookController.getAllBooks));
bookRouter.get("/:isbn", asyncWrapper(bookController.getBook));

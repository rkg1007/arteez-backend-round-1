import { Router } from "express";
import * as bookController from "../controllers/books.controller.js";
import { asyncWrapper } from "../utils/async-wrapper.util.js";

export const bookRouter = Router();

bookRouter.post("/", asyncWrapper(bookController.addBook));
bookRouter.get("/", asyncWrapper(bookController.getAllBooks));
bookRouter.get("/:bookId", asyncWrapper(bookController.getBook));

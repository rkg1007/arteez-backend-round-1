import { BookModel } from "../models/book.model.js";

export const getAllBooks = async () => {
  return BookModel.find();
};

export const addBook = async (newBookObject) => {
  const newBook = await BookModel.create(newBookObject);
  return newBook._id;
};

export const getBookByISBN = async (isbn) => {
  return BookModel.findOne({ isbn });
};

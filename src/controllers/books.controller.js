import * as bookService from "../services/books.service.js";

export const getAllBooks = async () => {
  return bookService.getAllBooks();
};

export const getBook = async (req) => {
  const { bookId } = req.params;
  return bookService.getBook(bookId);
};

export const addBook = async (req) => {
  const { body: requestBody } = req;
  const bookId = await bookService.addBook(requestBody);
  return { bookId };
};

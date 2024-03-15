import * as bookService from "../services/books.service.js";

export const getAllBooks = async () => {
  return bookService.getAllBooks();
};

export const getBook = async (req) => {
  const { isbn } = req.params;
  return bookService.getBook(isbn);
};

export const addBook = async (req) => {
  const { body: requestBody } = req;
  const bookId = await bookService.addBook(requestBody);
  return { bookId };
};

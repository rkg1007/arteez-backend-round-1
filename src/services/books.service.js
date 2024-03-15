import { bookErrors } from "../constants/errors.contant.js";
import { BadRequestError } from "../errors/bad-request.error.js";
import { NotFoundError } from "../errors/not-found.error.js";
import * as bookRepository from "../repositories/books.repository.js";
import { isEmpty, isNotEmpty } from "../utils/common.util.js";

export const getAllBooks = async () => {
    return bookRepository.getAllBooks();
}

export const getBook = async (bookId) => {
    const book = await bookRepository.getBookById(bookId);
    if (isEmpty(book)) {
        throw new NotFoundError(bookErrors.BOOK_NOT_FOUND);
    }
    return book;
}

export const addBook = async (requestBody) => {
    const { title, author, quantity, isbn } = requestBody;
    // check if book already exists or not with given isbn number
    const existingBook = await bookRepository.getBookByISBN(isbn);
    if (isNotEmpty(existingBook)) {
        throw new BadRequestError(bookErrors.BOOK_ALREADY_EXIST);
    }

    const bookId = await bookRepository.addBook({ title, author, quantity, isbn });
    return bookId;
}
import * as userRepository from "../repositories/users.repository.js";
import * as bookRepository from "../repositories/books.repository.js";
import * as bookIssueRepository from "../repositories/book-issue.repository.js";
import { isEmpty } from "../utils/common.util.js";
import { NotFoundError } from "../errors/not-found.error.js";
import {
  bookErrors,
  bookIssueErrors,
  userErrors,
} from "../constants/errors.contant.js";
import { BadRequestError } from "../errors/bad-request.error.js";

export const issueBook = async (username, isbn) => {
  const existingUser = await userRepository.findUserWithUsernameOrEmail({
    username,
  });
  if (isEmpty(existingUser)) {
    throw new NotFoundError(userErrors.USER_NOT_FOUND);
  }

  const existingBook = await bookRepository.getBookByISBN(isbn);
  if (isEmpty(existingBook)) {
    throw new NotFoundError(bookErrors.BOOK_NOT_FOUND);
  }

  const { quantity: availableBookQuantity } = existingBook;
  if (availableBookQuantity <= 0) {
    throw new BadRequestError(bookErrors.ENOUGH_QUANTITY_NOT_AVAILABLE);
  }

  await bookIssueRepository.issueBook(username, isbn);
  return true;
};

export const returnBook = async (username, isbn) => {
  const existingBookIssueHistory =
    await bookIssueRepository.checkIfBookIsAlreadyIssuedToGivenUserOrNot(
      username,
      isbn
    );
  if (isEmpty(existingBookIssueHistory)) {
    throw new BadRequestError(bookIssueErrors.BOOK_IS_NOT_ISSUED_TO_GIVEN_USER);
  }

  await bookIssueRepository.returnBook(username, isbn);
  return true;
};

import { books } from "./books.repository.js";
const bookIssueHistory = [];

export const issueBook = async (username, isbn) => {
  bookIssueHistory.push({
    username,
    isbn,
    isReturned: false,
  });
  books.forEach((book) => {
    const { isbn: bookISBN } = book;
    if (bookISBN == isbn) {
      book.quantity -= 1;
    }
  });
  return true;
};

export const returnBook = async (username, isbn) => {
  bookIssueHistory.forEach((bookIssue) => {
    const {
      username: currBookOwner,
      isbn: issuedBookISBN,
      isReturned: isBookReturned,
    } = bookIssue;
    if (
      currBookOwner == username &&
      issuedBookISBN == isbn &&
      !isBookReturned
    ) {
      bookIssue.isReturned = true;
    }
  });
  books.forEach((book) => {
    const { isbn: bookISBN } = book;
    if (bookISBN == isbn) {
      book.quantity += 1;
    }
  });
  return true;
};

export const checkIfBookIsAlreadyIssuedToGivenUserOrNot = async (
  username,
  isbn
) => {
  return bookIssueHistory.find((bookIssue) => {
    const {
      username: currBookOwner,
      isbn: issuedBookISBN,
      isReturned: isBookReturned,
    } = bookIssue;
    return (
      currBookOwner == username && issuedBookISBN == isbn && !isBookReturned
    );
  });
};

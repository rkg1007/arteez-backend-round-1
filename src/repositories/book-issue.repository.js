import { BookIssueModel } from "../models/book-issue.model.js";
import { BookModel } from "../models/book.model.js";

export const issueBook = async (username, isbn) => {
  await BookIssueModel.create({ username, isbn });
  await BookModel.updateOne(
    { isbn },
    {
      $inc: {
        quantity: -1,
      },
    }
  );
  return true;
};

export const returnBook = async (username, isbn) => {
  await BookIssueModel.updateOne(
    { username, isbn, isReturned: false },
    { isReturned: true }
  );
  await BookModel.updateOne({ isbn }, { $inc: { quantity: 1 } });
  return true;
};

export const checkIfBookIsAlreadyIssuedToGivenUserOrNot = async (
  username,
  isbn
) => {
  return BookIssueModel.findOne({ username, isbn, isReturned: false });
};

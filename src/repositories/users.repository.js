import { UserModel } from "../models/user.model.js";
import { BookIssueModel } from "../models/book-issue.model.js";

export const findUserWithUsernameOrEmail = async (filter) => {
  return UserModel.findOne({ $or: filter });
};

export const createUser = async (newUserObject) => {
  const newUser = await UserModel.create(newUserObject);
  return newUser._id;
};

export const getUserBorrowedBooks = async (username) => {
  return BookIssueModel.find({ username, isReturned: false });
};

import * as userService from "../services/users.service.js";

export const registerUser = async (req) => {
  const { body: requestBody } = req;
  const userId = await userService.registerUser(requestBody);
  return { userId };
};

export const loginUser = async (req) => {
  const { body: requestBody } = req;
  const accessToken = await userService.loginUser(requestBody);
  return { accessToken };
};

export const getUserBorrowedBooks = async (req) => {
  const { username } = req.params;
  const books = await userService.getUserBorrowedBooks(username);
  return books;
};

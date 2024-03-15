import * as userRepository from "../repositories/users.repository.js";
import * as hashingHelper from "../helpers/hashing.helper.js";
import * as jwtHelper from "../helpers/jwt.helper.js";
import { isEmpty, isNotEmpty, isEmail } from "../utils/common.util.js";
import { userErrors } from "../constants/errors.contant.js";
import { BadRequestError } from "../errors/bad-request.error.js";
import { NotFoundError } from "../errors/not-found.error.js";
import { UnAuthenticationError } from "../errors/unauthentication.error.js";

export const registerUser = async (requestBody) => {
  const { username, email, password } = requestBody;
  // check if any given with given username or email already exists or not
  const existingUser = await userRepository.findUserWithUsernameOrEmail({
    username,
    email,
  });
  if (isNotEmpty(existingUser)) {
    throw new BadRequestError(userErrors.USER_ALREADY_EXIST);
  }

  // create hash of password
  const hashedPassword = await hashingHelper.createPasswordHash(password);

  // create user
  const userId = await userRepository.createUser({
    email,
    username,
    password: hashedPassword,
  });
  return userId;
};

export const loginUser = async (requestBody) => {
  const { usernameOrEmail, password } = requestBody;

  // check if user exists or not with given username or email
  const existingUserFilter = isEmail(usernameOrEmail)
    ? { email: usernameOrEmail }
    : { username: usernameOrEmail };
  const existingUser = await userRepository.findUserWithUsernameOrEmail(
    existingUserFilter
  );
  if (isEmpty(existingUser)) {
    throw new NotFoundError(userErrors.USER_NOT_FOUND);
  }

  console.log(existingUser);

  // verify password
  const { password: hashedPassword } = existingUser;
  const isPasswordMatched = await hashingHelper.comparePassword(
    password,
    hashedPassword
  );
  if (!isPasswordMatched) {
    throw new UnAuthenticationError(userErrors.INVALID_PASSWORD);
  }

  // generate jwt token
  const { username } = existingUser;
  const accessToken = jwtHelper.generateToken({ username });
  return accessToken;
};

export const getUserBorrowedBooks = async (username) => {
  // check if user exists or not with given username
  const existingUser = await userRepository.findUserWithUsernameOrEmail({
    username,
  });
  if (isEmpty(existingUser)) {
    throw new NotFoundError(userErrors.USER_NOT_FOUND);
  }

  // fetch borrowed list
  const books = await userRepository.getUserBorrowedBooks(username);
  return books;
};

export const userErrors = {
  USER_ALREADY_EXIST: "User already exists with given username or email.",
  USER_NOT_FOUND: "User with given username or email is not found.",
  INVALID_PASSWORD: "Invalid password.",
};

export const bookErrors = {
  BOOK_ALREADY_EXIST: "Book already exists with given ISBN number.",
  BOOK_NOT_FOUND: "Book with given id is not found.",
  ENOUGH_QUANTITY_NOT_AVAILABLE:
    "Enough quantity of given book is not available.",
};

export const bookIssueErrors = {
  BOOK_IS_NOT_ISSUED_TO_GIVEN_USER: "Given book is not issued to given user.",
  BOOK_ALREADY_ISSUED_TO_GIVEN_USER:
    "Given book is already issued to given user.",
};

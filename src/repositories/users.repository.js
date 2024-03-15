const users = [];

export const findUserWithUsernameOrEmail = async (filter) => {
  return users.find((user) => {
    let isMatching = false;
    if (filter.email) {
      isMatching = isMatching || filter.email == user.email;
    }
    if (filter.username) {
      isMatching = isMatching || filter.username == user.username;
    }
    return isMatching;
  });
};

export const createUser = async (newUserObject) => {
  users.push(newUserObject);
  return users.length;
};

export const getUserBorrowedBooks = async (username) => {
  return [{ isbn: "abcd" }, { isbn: "efgh" }];
};

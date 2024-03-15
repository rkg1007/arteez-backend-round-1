export const books = [];

export const getAllBooks = async () => {
  return books;
};

export const addBook = async (newBookObject) => {
  books.push(newBookObject);
  return books.length;
};

export const getBookById = async (bookId) => {
  if (bookId > 0 && bookId <= books.length) {
    return books[bookId - 1];
  }
  return null;
};

export const getBookByISBN = async (isbn) => {
  return books.find((book) => book.isbn == isbn);
};

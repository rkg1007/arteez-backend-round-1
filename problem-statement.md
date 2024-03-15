# Task Description

You are tasked with building a backend system for a library. The system should allow users to
perform operations such as adding books, searching for books, borrowing and returning books,
and managing user accounts.

# Requirements

## Technologies to Use

Node.js for server-side JavaScript.
Express.js for building the RESTful API.
MongoDB for storing book and user information.

## Endpoints

1. POST /api/books: Endpoint to allow librarians to add new books to the library. Each book should
2. have a title, author, ISBN, and quantity available.
3. GET /api/books: Retrieve a list of all available books.
4. GET /api/books/:id: Retrieve a specific book by its ID.
5. POST /api/users: Allow users to register with a username, email, and password. Store user data
   in MongoDB.
6. POST /api/users/login: Allow registered users to log in.
7. POST /api/borrow/:bookId/:userId: Allow users to borrow a book. Update the quantity available.
8. POST /api/return/:bookId/:userId: Allow users to return a book. Update the quantity available.
9. GET /api/users/:userId/books: Retrieve a list of books borrowed by a specific user.

## Validation

Implement proper input validation and error handling.

## Security:
Implement appropriate security measures to protect against common web vulnerabilities.

## Code Structure and Style:
Organize your code in a clean and maintainable manner.
Use best practices for naming, indentation, and commenting.

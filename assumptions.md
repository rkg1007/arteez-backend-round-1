# Assumptions

## General
1. There is no authentication or authorization needed.

## Users
1. Username and Email will be unique for each user.

## Books
1. ISBN number of each book will be unique
2. Once a book is added with given ISBN number then it can not be altered directly.

## Book Issue
1. User can borrow any number of books.
2. At any time, a user can have only one copy of a book. User can borrow multiple books but no two borrowed book will have same ISBN number at any time.
3. User can return book and borrow again any number of times.
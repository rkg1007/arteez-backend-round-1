# Assumptions

## General
1. Project implementation are almost minimal and to solve given problem statement onbly.
2. There is no authentication or authorization needed.

## Users
1. Username and Email will be unique for each user.
2. Email will be a valid mail id and should match follow regex `/^[a-zA-Z0-9_.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4}$/` and required to create a user.
3. Username will have length between 3 to 10 and required to create a user.
4. Password will have length between 8 to 20 and can contain any character or number.

## Books
1. ISBN number of each book will be unique
2. Once a book is added with given ISBN number then it can not be altered directly.
3. ISBN number is of length 5 and required to create a book.
4. Title will have length between 3 to 100 and is required to create a book.
5. Author will have length between 1 to 100 and is required to create a book.
6. Quantity should a valid positive integer and greater than 0.

## Book Issue
1. User can borrow any number of books.
2. At any time, a user can have only one copy of a book. User can borrow multiple books but no two borrowed book will have same ISBN number at any time.
3. User can return book and borrow again any number of times.

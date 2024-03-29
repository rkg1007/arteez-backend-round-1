# Library Management System
We are build a simple library management system according the given problem statement. Whole problem statement can be found [here](problem-statement.md)

**Note:- As the problem statement is open ended so before developing the project, few assumptions are made which can be found [here](assumptions.md)**

# Project Setup
1. Please make sure that you have Nodejs installed in your system. To verify if Nodejs is installed or not, run `node --version` in your local terminal. If you able to get proper node version on screen then it can be assumed that Nodejs is installed in your system otherwise Nodejs can be installed from [here](https://nodejs.org/en)
2. Clone this repository using following command `git clone https://github.com/rkg1007/arteez-backend-round-1.git`.
3. Navigate into repository folder and install necessary node modules using the command `npm install`
4. To run and test this project, we will need to connect to `MongoDB` database so please setup a mongodb database on any remote server or in local system. To setup database on remote server easily, we can refer [MongoDB website](https://www.mongodb.com/).
5. Please add proper few enviroment variables in the project. To add enviroment variable, add file `development.js` in `envs` folder created in root folder of project. A `sample.js` file is given in same envs folder for the reference and all necessary variables are listed the sample.js. Please add all variables (listed in sample.js) in development.js with proper value.
6. You are ready to go now. Please run `npm run dev` or `npm start` command in terminal to start the server.
7. We can now test apis using any API testing tool or by simply postman also (a postman collection is also added in project).
8. Sample CURL commands are given below for implemented APIS


### CURL Commands
1. POST /api/users
```
curl --location 'http://localhost:5000/api/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "rkg1007",
    "email": "rkg10072000gmail.m",
    "password": "Rohit@1234"
}'
```

2. POST /api/users/login
```
curl --location 'http://localhost:5000/api/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "usernameOrEmail": "rkgupta10072000@gmail.com",
    "password": "Rohit@1234"
}'
```

3. GET /api/users/:username/books
```
curl --location 'http://localhost:5000/api/users/rkg1007/books'
```

4. POST /api/books
```
curl --location 'http://localhost:5000/api/books' \
--header 'Content-Type: application/json' \
--data '{
    "title": "new book",
    "author": "new author",
    "isbn": "abcde",
    "quantity": 1
}'
```

5. GET /api/books
```
curl --location 'http://localhost:5000/api/books'
```

6. GET /api/books/:isbn
```
curl --location 'http://localhost:5000/api/books/abcde'
```

7. POST /borrow/:isbn/:username
```
curl --location --request POST 'http://localhost:5000/api/borrow/abcde/rkg1007'
```

8. POST /api/return/:isbn/:username
```
curl --location --request POST 'http://localhost:5000/api/return/abcde/rkg1007'
```


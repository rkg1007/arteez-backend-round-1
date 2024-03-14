import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '5000';
const app = express();

app.use(express.json());


app.use('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is up and running on ${HOST}:${PORT}`)
})
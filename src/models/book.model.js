import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
  quantity: Number,
});

export const BookModel = mongoose.model("Book", bookSchema);

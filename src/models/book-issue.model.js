import mongoose from "mongoose";

const BookIssueSchema = new mongoose.Schema({
  username: String,
  isbn: String,
  isReturned: {
    type: Boolean,
    default: false,
  },
  issuedDate: {
    type: Date,
    default: new Date(),
  },
});

export const BookIssueModel = mongoose.model(
  "BookIssueHistory",
  BookIssueSchema
);

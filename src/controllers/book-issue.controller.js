import * as bookIssueService from "../services/book-issue.service.js";

export const issueBook = async (req) => {
  const { username, isbn } = req.params;
  await bookIssueService.issueBook(username, isbn);
  return true;
};

export const returnBook = async (req) => {
  const { username, isbn } = req.params;
  await bookIssueService.returnBook(username, isbn);
  return true;
};

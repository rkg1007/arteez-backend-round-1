import Joi from "joi";

export const addBookSchema = Joi.object({
  title: Joi.string().min(3).max(100).required().messages({
    "string.min": "Title should have minimum length of 3.",
    "string.max": "Title should have maximum length of 100",
    "any.required": "Title is required",
    "string.base": "Title should be a string",
  }),
  author: Joi.string().min(1).max(100).required().messages({
    "string.min": "Author should have minimum length of 1.",
    "string.max": "Author should have maximum length of 100",
    "any.required": "Author is required",
    "string.base": "Author should be a string",
  }),
  isbn: Joi.string().min(5).max(5).required().messages({
    "string.min": "ISBN should have length of 5.",
    "string.max": "ISBN should have length of 5",
    "any.required": "ISBN is required",
    "string.base": "ISBN should be a string",
  }),
  quantity: Joi.number().min(1).integer().messages({
    "number.base": "Quantity should a number",
    "number.min": "Quantity should be minimum 1",
    "number.integer": "Quantity should be a integer",
  }),
});

export const isbnSchema = Joi.object({
  isbn: Joi.string().min(5).max(5).required().messages({
    "string.min": "Invalid ISBN number",
    "string.max": "Invalid ISBN number",
    "any.required": "Invalid ISBN number",
    "string.base": "Invalid ISBN number",
  }),
});

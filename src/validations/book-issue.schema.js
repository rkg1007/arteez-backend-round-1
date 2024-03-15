export const bookIssueSchema = Joi.object({
  isbn: Joi.string().min(5).max(5).required().messages({
    "string.min": "Invalid ISBN number",
    "string.max": "Invalid ISBN number",
    "any.required": "Invalid ISBN number",
    "string.base": "Invalid ISBN number",
  }),
  username: Joi.string().min(3).max(10).required().messages({
    "string.min": "Invalid username.",
    "string.max": "Invalid username.",
    "any.required": "Invalid username.",
    "string.base": "Invalid username.",
  }),
});

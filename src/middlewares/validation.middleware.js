import { BadRequestError } from "../errors/bad-request.error.js";
import { isNotEmpty } from "../utils/common.util.js";

export const validateBody = (schema) => {
  return (req, res, next) => {
    const { value, error } = schema.validate(req.body);
    if (isNotEmpty(error)) {
      return next(new BadRequestError(error.message));
    }
    req.body = value;
    next();
  };
};

export const validateParams = (schema) => {
  return (req, res, next) => {
    const { value, error } = schema.validate(req.params);
    if (isNotEmpty(error)) {
      return next(new BadRequestError(error.message));
    }
    req.params = value;
    next();
  };
};

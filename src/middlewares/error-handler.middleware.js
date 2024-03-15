import { CustomDSGError } from "../errors/custom.error.js";

export const errorHandler = (err, req, res, next) => {
  let error = "something went wrong";
  let statusCode = 500;
  if (CustomDSGError.isCustomDSGError(err) && !err.isPrivate) {
    error = err.message;
    statusCode = err.statusCode;
  } else if (err.message == "Not Found") {
    error = "Route not found";
    statusCode = 404;
  }
  // render the error page
  res.status(statusCode).json({ status: false, error });
};

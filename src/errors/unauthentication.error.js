import { CustomDSGError } from "./custom.error.js";

export class UnAuthenticationError extends CustomDSGError {
  constructor(message, options = {}) {
    super(message, { ...options, statusCode: 401 });
  }
}

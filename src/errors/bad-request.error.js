import { CustomDSGError } from './custom.error.js';

export class BadRequestError extends CustomDSGError {
  constructor(message, options = {}) {
    super(message, { ...options, statusCode: 400 });
  }
}

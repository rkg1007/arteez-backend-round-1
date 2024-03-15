import { CustomDSGError } from './custom.error.js';

export class InternalServerError extends CustomDSGError {
  constructor(message, options = {}) {
    super(message, { ...options, statusCode: 500 });
  }
}

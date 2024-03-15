import { CustomDSGError } from './custom.error.js';

export class NotFoundError extends CustomDSGError {
  constructor(message, options = {}) {
    super(message, { ...options, statusCode: 404 });
  }
}

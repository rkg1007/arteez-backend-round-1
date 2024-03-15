export class CustomDSGError extends Error {
  constructor(message, options = {}) {
    super(message);
    this.statusCode = options.statusCode || 500;
    this.position = options.position || '';
    this.isPrivate = options.isPrivate || false;
    this.customDSGError = true;
  }

  static isCustomDSGError(error) {
    return error.customDSGError;
  }
}

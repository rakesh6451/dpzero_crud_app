export class ErrorUtil extends Error {
  constructor(message, statusCode, code) {
    super(message || "Internal server error occurred. Please try again later.");

    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

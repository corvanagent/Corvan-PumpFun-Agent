export class CorvanError extends Error {
  /**
   * @param {string} message
   * @param {number} [statusCode]
   */
  constructor(message, statusCode) {
    super(message);
    this.name       = 'CorvanError';
    this.statusCode = statusCode ?? null;
  }
}

export class AuthError extends CorvanError {
  constructor(message = 'Authentication failed') {
    super(message, 401);
    this.name = 'AuthError';
  }
}

export class RateLimitError extends CorvanError {
  /**
   * @param {string} message
   * @param {number} retryAfter — seconds to wait before retrying
   */
  constructor(message = 'Rate limit exceeded', retryAfter = 60) {
    super(message, 429);
    this.name       = 'RateLimitError';
    this.retryAfter = retryAfter;
  }
}

export class NetworkError extends CorvanError {
  constructor(message = 'Network error') {
    super(message, null);
    this.name = 'NetworkError';
  }
}

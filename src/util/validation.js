/**
 *
 * @param {*} value
 * @returns Boolean
 */
export function isEmail(value) {
  return value.includes("@");
}

/**
 *
 * @param {*} value
 * @returns Boolean
 */
export function isNotEmpty(value) {
  return value.trim() !== "";
}

/**
 *
 * @param {*} value
 * @param {*} minLength
 * @returns Boolean
 */
export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

/**
 *
 * @param {*} value
 * @param {*} otherValue
 * @returns Boolean
 */
export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}

/**
 *
 * @param {*} email
 * @returns Boolean
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 *
 * @param {*} password
 * @returns Boolean
 */
export function isValidPassword(password) {
  // Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

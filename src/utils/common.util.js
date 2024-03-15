import { EMAIL_REGEX } from "../constants/regex.constant.js";

export const isEmpty = (obj, options = {}) => {
  const {
    isZeroEmpty = true,
    isEmptyStringEmpty = true,
    isNullEmpty = true,
    isUndefinedEmpty = true,
  } = options;

  if (obj === null) {
    return isNullEmpty;
  }

  if (obj === undefined) {
    return isUndefinedEmpty;
  }

  if (typeof obj === "number") {
    return obj === 0 && isZeroEmpty;
  }

  if (typeof obj === "string") {
    return obj.length === 0 && isEmptyStringEmpty;
  }

  if (Array.isArray(obj)) {
    return obj.length === 0;
  }

  return Object.getOwnPropertyNames(obj).length === 0;
};

export const isNotEmpty = (obj, options = {}) => {
  return !isEmpty(obj, options);
};

export const isEmail = (email) => {
  return EMAIL_REGEX.test(email);
};

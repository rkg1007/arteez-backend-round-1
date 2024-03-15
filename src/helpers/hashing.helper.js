import bcrypt from "bcrypt";
import * as config from "../utils/config.util.js";

const HASHING_SALT_ROUDS = config.get('HASHING_SALT_ROUDS') || 10;

export const createPasswordHash = async (password) => {
  return await bcrypt.hash(password, HASHING_SALT_ROUDS);
};

export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

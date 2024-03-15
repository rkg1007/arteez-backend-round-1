export default {
  HOST: "localhost",
  PORT: 5000,

  JWT_SECRET_KEY: "abcd",  // secret key to sign access token
  JWT_EXPIRY_TIME: "1d",  // expiry time for access token in days

  HASHING_SALT_ROUDS: 10,  // number of salt rounds for hashing

  MONGO_URI: "<YOUR MONGODB DATABASE CONNECTION STRING>",
};

import developmentEnvs from "../../envs/development.js";

export const get = (key) => {
  return developmentEnvs[key];
};

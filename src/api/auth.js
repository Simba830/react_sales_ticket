import { instance } from "./instance";

export const registerAuth = async ({ email, password }) => {
  try {
    return await instance.post("/user/register", {
      email,
      password,
    });
  } catch (error) {
    throw new Error(error?.response?.data?.error || "error when login user");
  }
};

export const signInUser = async ({ email, password }) => {
  try {
    return await instance.post("/user/login", {
      email,
      password,
    });
  } catch (error) {
    throw new Error(error?.response?.data?.error || "error when login user");
  }
};

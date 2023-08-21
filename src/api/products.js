import { instance } from "./instance";

export const getAllProducts = async () => {
  try {
    return await instance.get("product");
  } catch (error) {
    throw new Error(error?.response?.data?.error || "Error get all products");
  }
};

import { instance } from "./instance";

export const postProduct = async (body) => {
  try {
    const res = await instance.post("/checkout", body);

    return res.data;
  } catch (error) {
    console.log("error", error);
  }
};

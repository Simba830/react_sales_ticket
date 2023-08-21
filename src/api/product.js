import { instance } from "./instance";

export const postProduct = async (body) => {
  try {
    const res = await instance.post("/checkout", body);

    return res.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const createTickets = async () => {
  const requests = [];
  for (let id = 1; id <= 95; id++) {
    requests.push(instance.post("/product/create", { key_id: id }));
  }

  try {
    const responses = await Promise.all(requests);
    console.log("All requests completed:", responses);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

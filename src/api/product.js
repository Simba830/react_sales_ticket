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
    // requests.push(instance.post("/product/create", { key_id: id }));
    const response = await instance.put("/product/create", { key_id: id });
    requests.push(response);
  }
  try {
    const responses = await Promise.all(requests);
    console.log("All requests completed:", responses);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const addTicket = async (deletedIDs) => {
  const requests = [];
  for (let i = 0; i < deletedIDs.length; i++) {
    const response = await instance.put("/product/create", {
      key_id: deletedIDs[i],
    });
    requests.push(response);
  }
  try {
    const responses = await Promise.all(requests);
    console.log("All requests completed:", responses);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
var deletedIDs = [];
export const getDaletedIDs = async () => {
  try {
    const res = await instance.get("deleted_tickets");
    deletedIDs = res;
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
};

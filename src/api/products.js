import { instance } from "./instance";

export const getAllProducts = async () => {
  try {
    return await instance.get("product");
  } catch (error) {
    throw new Error(error?.response?.data?.error || "Error get all products");
  }
};

export const getRemainTickets = async () => {
  try {
    return await instance.get("product/remain_tickets");
  } catch (error) {
    throw new Error(error?.response?.data?.error || "Error get remain tickets");
  }
};

export const getOrderedTickets = async () => {
  try {
    return await instance.get("product/ordered_tickets");
  } catch (error) {
    throw new Error(
      error?.response?.data?.error || "Error get ordered tickets"
    );
  }
};

export const deleteTicket = async (id) => {
  try {
    if (!id) {
      throw new Error("No ID provided");
    }
    return await instance.delete(`product/${id}`);
  } catch (error) {
    throw new Error(error?.response?.data?.error || "Error deleting ticket");
  }
};

export const deleteAll = async () => {
  try {
    return await instance.delete("product");
  } catch (error) {
    throw new Error(error?.response?.data?.error || "Error delete tickets");
  }
};

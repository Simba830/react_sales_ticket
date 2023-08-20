import axios from "axios";
import { BASE_URL } from "../config";

export const instance = axios.create({
  baseURL: `${BASE_URL}/api/`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export const setAuthHeaderInstance = (token) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

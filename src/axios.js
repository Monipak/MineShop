import axios from "axios";
import store from "@/store";

const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  logIn(userInfo) {
    return apiClient.post("/api/users/login", userInfo);
  },
  register(userInfo) {
    return apiClient.post("/api/users/register", userInfo);
  },
  loadEveryUsers() {
    return apiClient.get("/api/users", {
      headers: { "x-access-token": store.getters.getToken },
    });
  },
  loadEveryProduct() {
    return apiClient.get("/api/products");
  },
  getRate(id) {
    return apiClient.get("/api/products/" + id + "/average");
  },
  setProductQuantity(payload) {
    return apiClient.patch(
      "/api/products/" + payload.id + "/quantity",
      { quantity: payload.quantity },
      {
        headers: { "x-access-token": store.getters.getToken },
      }
    );
  },
  addProduct(product) {
    return apiClient.post("/api/products", product, {
      headers: { "x-access-token": store.getters.getToken },
    });
  },
};

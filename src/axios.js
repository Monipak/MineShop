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
  loadUser(id) {
    return apiClient.get("/api/users/" + id)
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
      { headers: { "x-access-token": store.getters.getToken } }
    );
  },
  addProduct(product) {
    return apiClient.post("/api/products", product, {
      headers: { "x-access-token": store.getters.getToken },
    });
  },
  changePassword(payload) {
    return apiClient.patch("/api/users/" + payload.id,
      { password: payload.password },
      { headers: { "x-access-token": store.getters.getToken } });
  },
  makeAdmin(payload) {
    return apiClient.patch("/api/users/" + payload.id + "/setPerms",
      { perms: payload.perms },
      { headers: { "x-access-token": store.getters.getToken } });
  },
  banUser(id) {
    return apiClient.delete("/api/users/" + id,
      { headers: { "x-access-token": store.getters.getToken } })
      .catch(error => error);
  },
  getReviews(id) {
    return apiClient.get('/api/products/' + id + '/reviews')
  },
  deleteReview(id) {
    return apiClient.delete('/api/reviews/' + id,
      { headers: { "x-access-token": store.getters.getToken } })
  },
  addReview(payload) {
    return apiClient.post('/api/products/' + payload.id + '/reviews', payload.review,
      { headers: { "x-access-token": store.getters.getToken } })
  }
};

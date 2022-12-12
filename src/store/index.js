import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import axiosHandler from "../axios.js";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state: {
    user: {},
    products: [],
    islogged: false,
    productsLoaded: false,
    users: {},
    rates: {},
    currentReviews: {},
    cart: {},
  },
  getters: {
    userInfo(state) {
      return state.user;
    },
    isLogged(state) {
      return state.islogged;
    },
    getToken(state) {
      return state.user.token;
    },
    allUsers(state) {
      return state.users;
    },
    allProducts(state) {
      return state.products;
    },
    productsLoaded(state) {
      return state.productsLoaded;
    },
    cart(state) {
      return state.cart;
    },
    rates(state) {
      return state.rates;
    },
    currentReviews(state){
      return state.currentReviews
    }
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.islogged = true;
      state.user = {
        userId: payload.id,
        username: payload.username,
        email: payload.email,
        perms: payload.perms,
        token: payload.accessToken,
      };
    },
    UNSET_USER_INFO(state) {
      state.islogged = false;
      state.user = {};
      state.users = {};
    },
    SET_PRIVATE_USERS(state, users) {
      state.users = users;
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_LOADED(state) {
      state.productsLoaded = true;
    },
    SET_RATE(state, payload) {
      state.rates[payload.id] = payload.rate;
    },
    SET_CART(state, cart) {
      state.cart = cart;
    },
    SET_PRODUCT_QUANTITY(state, payload) {
      state.products.forEach((product) => {
        if (product.id == payload.id) product.quantity = payload.quantity;
        return;
      });
    },
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    SET_CURRENT_REVIEWS(state, reviews) {
      state.currentReviews = reviews;
    },
  },
  actions: {
    login(context, userInfo) {
      return axiosHandler.logIn(userInfo).then((response) => {
        context.commit("SET_USER_INFO", response.data);
        if (context.getters.userInfo.perms)
          return context.dispatch("loadAdminData");
      });
    },
    register(context, userInfo) {
      return axiosHandler.register(userInfo).then(() => {
        context.dispatch("login", userInfo);
      });
    },

    loadAdminData(context) {
      return axiosHandler.loadEveryUsers().then((users) => {
        context.commit("SET_PRIVATE_USERS", users.data);
      });
    },
    loadProducts(context) {
      return axiosHandler.loadEveryProduct().then((products) => {
        context.commit("SET_PRODUCTS", products.data);
      });
    },
    getRates(context) {
      context.getters.allProducts.forEach((product) => {
        axiosHandler.getRate(product.id).then((rate) => {
          context.commit("SET_RATE", { id: product.id, rate: rate.data });
        });
      });
      context.commit("SET_LOADED");
    },
    setProductQuantity(context, payload) {
      return axiosHandler
        .setProductQuantity(payload)
        .then(context.commit("SET_PRODUCT_QUANTITY", payload))
        .catch((error) => console.log(error));
    },
    addProduct(context, product) {
      return axiosHandler
        .addProduct(product)
        .then(context.commit("ADD_PRODUCT", product))
        .catch((error) => console.log("err" + error));
    },
    changePassword(context, payload) {
      return axiosHandler.changePassword(payload);
    },
    banUser(context, id) {
      return axiosHandler
        .banUser(id)
        .then(() => context.dispatch("loadAdminData"))
        .catch((error) => error);
    },
    makeUserAdmin(context, payload) {
      return axiosHandler
        .makeAdmin(payload)
        .then(() => context.dispatch("loadAdminData"));
    },
    getProductReviews(context, productId) {
      var newReviews = []
      return axiosHandler.getReviews(productId).then((reviews) => {
        if (reviews.data){
          reviews.data.forEach(review => {
            var newReview = structuredClone(review)
            axiosHandler.loadUser(review.user).then(user =>{
              newReview.user = user.data.username
              newReviews.push(newReview)
            } )
          })
        }
        context.commit("SET_CURRENT_REVIEWS",newReviews)
      }).catch(error => error);
    },
  },
  plugins: [vuexLocal.plugin],
});

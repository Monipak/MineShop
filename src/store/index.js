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
    privateData: {},
    rates: {},
    cart: {}
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
      return state.privateData.users;
    },
    allProducts(state) {
       return state.products;
    },
    productsLoaded(state) {
      return state.productsLoaded
    },
    cart(state) {
      return state.cart
    },
    rates(state) {
      return state.rates
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
      state.privateData = {};
    },
    SET_PRIVATE_USERS(state, users) {
      state.privateData.users = users;
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_LOADED(state){
      state.productsLoaded = true;
    },
    SET_RATE(state, payload) {
      state.rates[payload.id] = payload.rate;
    },
    SET_CART(state, cart) {
      state.cart = cart
    },
    SET_PRODUCT_QUANTITY(state, payload) {
      state.products.forEach((product) => {
        if (product.id == payload.id)
          product.quantity = payload.quantity
        return
      })
    }
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
        context.dispatch("login",userInfo)
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
      context.getters.allProducts.forEach(product => {
        axiosHandler.getRate(product.id).then(rate => {
          context.commit("SET_RATE", { id: product.id, rate: rate.data })
        })
      })
      context.commit("SET_LOADED");
    },
    setProductQuantity(context, payload) {

      return axiosHandler.setProductQuantity(payload)
      .then(context.commit("SET_PRODUCT_QUANTITY", payload))
      .catch(error => console.log(error))
    }
  },
  plugins: [vuexLocal.plugin],
});

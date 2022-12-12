import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import axiosHandler from "../axios.js";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state: {
    user: {},
    islogged: false,
    privateData: {},
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
    allUsers(state){
      return state.privateData.users;
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
        context.commit("SET_USER_INFO", userInfo);
      });
    },

    loadAdminData(context) {
      return axiosHandler.loadEveryUsers().then((users) => {
        context.commit("SET_PRIVATE_USERS", users.data);
      })
    },
  },
  plugins: [vuexLocal.plugin],
});

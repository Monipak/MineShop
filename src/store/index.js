import { createStore } from "vuex";
import axiosHandler from "../axios.js";
export default createStore({
  state: {
    user: {},
  },
  getters: {
    userInfo(state) {
      return state.user;
    },
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.user = {
        userId: payload.id,
        username: payload.username,
        email: payload.email,
        perms: payload.perms,
        "x-access-token": payload.accessToken,
      };
    },
  },
  actions: {
    login(context, userInfo) {
      var prom = axiosHandler.logIn(userInfo);

      prom
        .then((response) => {
          console.log("yay");
          context.commit("SET_USER_INFO", response.body);
          console.log(context.getters.userInfo);
        })
        .catch((error)=> error) // do nothing as it is handled in vue
      return prom;
    },
  },
});
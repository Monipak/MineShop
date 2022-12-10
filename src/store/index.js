import { createStore } from "vuex";
import axiosHandler from "../axios.js";
export default createStore({
  state: {
    user: {},
    islogged:false,
  },
  getters: {
    userInfo(state) {
      return state.user;
    },
    isLogged(state){
      return state.islogged
    }
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
      var promise = axiosHandler.logIn(userInfo);

      promise
        .then((response) => {
          context.commit("SET_USER_INFO", response.data)
        })
        .catch((error)=> error) // do nothing as it is handled in vue
      return promise;
    },
    register(context,userInfo){
      return axiosHandler.register(userInfo)
    }
  },
});
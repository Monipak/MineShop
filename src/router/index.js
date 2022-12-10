import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/subviews/LoginView.vue";
import RegisterView from "../views/subviews/RegisterView.vue";
import store from "../store/index.js";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => {
      if (!store.getters.islogged) return require("../views/HomeView.vue");
      else {
        if (store.getters.userInfo.perms)
          return require("../views/HomeAdminView.vue");
        else return require("../views/HomeUserView.vue");
      }
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

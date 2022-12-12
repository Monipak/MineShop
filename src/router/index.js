import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import HomeAdminView from "../views/HomeAdminView.vue";
import HomeUserView from "../views/HomeUserView.vue";

import LoginView from "../views/subviews/LoginView.vue";
import RegisterView from "../views/subviews/RegisterView.vue";
import ProductsView from "../views/subviews/ProductsView.vue";
import ProductView from "../views/subviews/ProductView.vue";
import CartView from "../views/subviews/CartView.vue";
import ManageUsers from "../views/subviews/ManageUsers.vue";

import store from "@/store";

//import store from "../store/index.js";
const routes = [
  {
    path: "/",
    name: "guestHome",
    component: HomeView,
    meta: { role: "guest" },
    children: [
      { path: "/login", component: LoginView },
      { path: "/register", component: RegisterView },
      { path: "/products", name: "guestProducts", component: ProductsView },
      { path: "/products/:id", name: "guestProduct", component: ProductView },
    ],
  },
  {
    path: "/",
    name: "adminHome",
    component: HomeAdminView,
    meta: { role: "admin" },
    children: [
      { path: "/userTab", component: ManageUsers },
      { path: "/products", name: "adminProducts", component: ProductsView },
      { path: "/products/:id", name: "adminProduct", component: ProductView },
    ],
  },
  {
    path: "/",
    name: "userHome",
    component: HomeUserView,
    meta: { role: "user" },
    children: [
      { path: "/products", name: "userProducts", component: ProductsView },
      { path: "/cart", name: "cart", component: CartView },
      { path: "/products/:id", name: "userProduct", component: ProductView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

function getRole() {
  if (!store.getters.isLogged) return "guest";
  return store.getters.userInfo.perms ? "admin" : "user";
}

router.beforeEach(async (to) => {
  var role = getRole();
  if (to.meta.role != role) {
    if (to.path == "/") return { name: role + "Home" };
    else if (to.path.includes("/products")) {
      if (!to.params.id) return { name: role + "Products" };
      else {
        store.commit("SET_CURRENT_REVIEWS",[])
        return { name: role + "Product", params :{id:to.params.id} };
      } 
    }
    return "/";
  }
});

export default router;

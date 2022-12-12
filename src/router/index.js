import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import HomeAdminView from "../views/HomeAdminView.vue";
import HomeUserView from "../views/HomeUserView.vue";

import LoginView from "../views/subviews/LoginView.vue";
import RegisterView from "../views/subviews/RegisterView.vue";
import ProductsView from "../views/subviews/ProductsView.vue";
import CartView from "../views/subviews/CartView.vue";
import ManageUsers from "../views/subviews/ManageUsers.vue"
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
    ],
  },
  {
    path: "/",
    name: "adminHome",
    component: HomeAdminView,
    meta: { role: "admin" },
    children: [
      {path:"/userTab", component: ManageUsers},
      {path:"/products", name: "adminProducts", component:ProductsView}
    ]
  },
  {
    path: "/",
    name: "userHome",
    component: HomeUserView,
    meta: { role: "user" },
    children: [
      { path: "/products", name: "userProducts", component: ProductsView },
      { path: "/cart", name:"cart", component:CartView}
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

function getRole(){
  if (!store.getters.isLogged)
    return "guest"
  return store.getters.userInfo.perms ? "admin" : "user"
}

router.beforeEach(async (to) => {
  var role = getRole()
  if (to.meta.role != role){
    if (to.fullPath == "/")
      return {name : role + "Home"}
    else if (to.fullPath == "/products")
      return {name : role + "Products"}
    return '/'
  }
});

export default router;

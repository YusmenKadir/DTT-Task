import  { RouteConfig } from "vue-router";


export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () => import("./components/Home.vue")
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("./components/Categories.vue")
  },
  {
    path: "/random",
    name: "random",
    component: () => import("./components/Random.vue")
  },
  {
    path: "/details/:productId",
    name: "details",
    component: () => import("./components/Details.vue")
  },

];


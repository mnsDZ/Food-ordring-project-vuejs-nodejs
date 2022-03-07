import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/orders",
      name: "orders",
      component: () => import("./components/OrdersList")
    },
    {
      path: "/orders/:id",
      name: "orders-details",
      component: () => import("./components/Order")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddOrder")
    }
  ]
});
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/Products.vue")
  },
  {
    path: "/overview/:id",
    name: "overview",
    component: () =>
      import(/* webpackChunkName: "overview" */ "../views/Overview.vue")
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: () =>
      import(/* webpackChunkName: "wishlist" */ "../views/Wishlist.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

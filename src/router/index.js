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
    path: "/product",
    name: "product",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/Product.vue"),
    children: [
      {
        path: "computer",
        name: "computer",
        component: () =>
          import(
            /* webpackChunkName: "computer" */ "../views/product/Computer.vue"
          )
      },
      {
        path: "components",
        name: "components",
        component: () =>
          import(
            /* webpackChunkName: "components" */ "../views/product/Components.vue"
          )
      },
      {
        path: "peripherals",
        name: "peripherals",
        component: () =>
          import(
            /* webpackChunkName: "peripherals" */ "../views/product/Peripherals.vue"
          )
      },
      {
        path: "netdevices",
        name: "netdevices",
        component: () =>
          import(
            /* webpackChunkName: "netdevices" */ "../views/product/Netdevices.vue"
          )
      },
      {
        path: "accessories",
        name: "accessories",
        component: () =>
          import(
            /* webpackChunkName: "accessories" */ "../views/product/Accessories.vue"
          )
      },
      {
        path: "gadgets",
        name: "gadgets",
        component: () =>
          import(
            /* webpackChunkName: "gadgets" */ "../views/product/Gadgets.vue"
          )
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

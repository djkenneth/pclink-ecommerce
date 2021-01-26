import Vue from "vue";
import VueRouter from "vue-router";
import goTo from "vuetify/es5/services/goto";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "store",
    component: () =>
      import(
        /* webpackChunkName: "store" */ "../views/store/MainContainer.vue"
      ),
    redirect: { name: "Home" },
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/store/Home.vue")
      },
      {
        path: "products",
        name: "products",
        component: () =>
          import(
            /* webpackChunkName: "products" */ "../views/store/Products.vue"
          )
      },
      {
        path: "overview/:id",
        name: "overview",
        component: () =>
          import(
            /* webpackChunkName: "overview" */ "../views/store/Overview.vue"
          )
      },
      {
        path: "wishlist",
        name: "wishlist",
        component: () =>
          import(
            /* webpackChunkName: "wishlist" */ "../views/store/Wishlist.vue"
          )
      },
      {
        path: "cart",
        name: "cart",
        component: () =>
          import(/* webpackChunkName: "cart" */ "../views/store/Cart.vue")
      }
    ]
  },
  {
    path: "/adm",
    name: "admin",
    redirect: { name: "login" },
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/Admin/MainContainer.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/Admin/Login.vue")
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/Admin/Dashboard.vue"
          )
      }
    ]
  }
  // {
  //   path: "/",
  //   name: "Home",
  //   component: () =>
  //     import(/* webpackChunkName: "home" */ "../views/store/Home.vue")
  // },
  // {
  //   path: "/products",
  //   name: "products",
  //   component: () =>
  //     import(/* webpackChunkName: "products" */ "../views/store/Products.vue")
  // },
  // {
  //   path: "/overview/:id",
  //   name: "overview",
  //   component: () =>
  //     import(/* webpackChunkName: "overview" */ "../views/store/Overview.vue")
  // },
  // {
  //   path: "/wishlist",
  //   name: "wishlist",
  //   component: () =>
  //     import(/* webpackChunkName: "wishlist" */ "../views/store/Wishlist.vue")
  // },
  // {
  //   path: "/cart",
  //   name: "cart",
  //   component: () =>
  //     import(/* webpackChunkName: "cart" */ "../views/store/Cart.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
  routes
});

export default router;

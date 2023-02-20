import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homeview",
      component: () => import("../views/HomeView.vue"),
      children: [
        {
          path: "products",
          name: "商品列表",
          component: () => import("../views/ProductsView.vue"),
        },
        {
          path: "product/:id",
          name: "商品資訊",
          props: (route) => ({
            productId: route.params.id,
          }),
          component: () => import("../views/ProductView.vue"),
        },
        {
          path: "cart",
          name: "購物車",
          component: () => import("../views/CartView.vue"),
        },
      ],
    },
  ],
  linkActiveClass: "active",
});

export default router;

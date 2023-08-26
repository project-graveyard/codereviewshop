import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/services",
      name: "Services",
      component: () => import("../views/Service/ServiceView.vue"),
    },
    {
      path: "/:catchAll(.*)*",
      name: "PageNotFound",
      component: () => import("../views/PageNotFoundView.vue"),
    },
  ],
});

router.beforeEach((to, _, next) => {
  document.title = "CodeReviewShop ~ " + to.name;
  next();
});

export default router;

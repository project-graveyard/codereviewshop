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
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/timeline",
      name: "Timeline",
      component: () => import("../views/Timeline/Timeline.vue"),
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

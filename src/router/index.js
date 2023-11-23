import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Accueil.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home,
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../components/ErreurPage.vue"),
  },
];

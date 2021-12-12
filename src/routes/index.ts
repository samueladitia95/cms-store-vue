"use strict";

import {
  RouteRecordRaw,
  createRouter,
  createWebHistory,
  Router,
} from "vue-router";
import Home from "../views/Home/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

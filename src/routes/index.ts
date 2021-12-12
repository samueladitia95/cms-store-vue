"use strict";

import {
  RouteRecordRaw,
  createRouter,
  createWebHistory,
  Router,
} from "vue-router";
import Home from "../views/Home.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

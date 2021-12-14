import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import metaHandler from "../helpers/metaHandler";
import RouteGuard from "../helpers/route-guard";

import adminRoutes from "../dashboards/admin/adminRoutes";
import guestRoutes from "../dashboards/guest/guestRoutes";

Vue.use(VueRouter);

const routes = [...guestRoutes, ...adminRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  store.dispatch("CANCEL_PENDING_REQUESTS");
  metaHandler(to, from, next);
  RouteGuard(to, from, next);
});

export default router;

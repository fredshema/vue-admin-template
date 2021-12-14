import store from "../store";
import appRouter from "../router";
import decode from "jwt-decode";

export default (to, from, next) => {
  const token = sessionStorage.getItem("access");
  if (!!token) {
    isLoggedIn(to, next);
  } else {
    isNotLoggedIn(to, next);
  }
};

function isLoggedIn(to, next) {
  if (to.matched.some((record) => record.meta.guest)) {
    navigateToUserPage(to, next);
  } else if (to.matched.some((record) => record.meta.requireAuth)) {
    setUserData(to, next);
  } else if (to.matched.some((record) => record.meta.helper)) {
    next();
  } else if (to.matched.some((record) => record.meta.notFound)) {
    next();
  }
}

function isNotLoggedIn(to, next) {
  if (to.matched.some((record) => record.meta.guest)) {
    next();
  } else if (to.matched.some((record) => record.meta.requireAuth)) {
    goToRoute("/logout", next);
  } else if (to.matched.some((record) => record.meta.helper)) {
    next();
  } else if (to.matched.some((record) => record.meta.notFound)) {
    next();
  }
}

function navigateToUserPage(to, next) {
  goToRoute("/admin", next);
}

function setUserData(to, next) {
  const token = sessionStorage.getItem("access");
  store.dispatch("admin/setAdminData", decode(token));
  if (!to.path.includes("admin")) {
    goToRoute("/admin", next);
  } else {
    next();
  }
}

function goToRoute(route, next) {
  if (appRouter.currentRoute.path != route) {
    next(route);
  }
}

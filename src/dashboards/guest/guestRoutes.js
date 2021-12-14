import { Login } from "./pages";
import { Logout } from "../../components";

export default [
  {
    path: "/",
    redirect: { name: "login" },
    meta: {
      guest: true,
      title: "Home",
      metaTags: [
        {
          name: "description",
          content: "Home.",
        },
        {
          property: "og:description",
          content: "Home.",
        },
      ],
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      guest: true,
      title: "Login",
      metaTags: [
        {
          name: "description",
          content: "Login.",
        },
        {
          property: "og:description",
          content: "Login.",
        },
      ],
    },
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
    meta: {
      helper: true,
      title: "Logout",
      metaTags: [
        {
          name: "description",
          content: "Logout.",
        },
        {
          property: "og:description",
          content: "Logout.",
        },
      ],
    },
  },
];

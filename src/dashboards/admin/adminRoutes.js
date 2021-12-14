import layout from "./adminLayout.vue";

import { Home } from "./pages";
export default [
  {
    path: "/admin",
    component: layout,
    children: [
      {
        path: "",
        redirect: { name: "dashboard-home" },
      },
      {
        path: "home",
        name: "dashboard-home",
        component: Home,
        meta: {
          requireAuth: true,
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
    ],
  },
];

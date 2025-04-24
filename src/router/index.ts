import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "../components/Layout.vue";
import { useAuth } from "../composables/useAuth";
import { Locations } from "../constants/locations";

const routes: Array<RouteRecordRaw> = [
  {
    path: Locations.BASE,
    component: Layout, 
    children: [
      {
        path: Locations.ADMIN_HOME,
        name: "Dashboard",
        component: () => import("../views/DashboardComponent.vue"), // Lazy-loaded Dashboard component
        meta: { title: "Dashboard",requiresAuth: true },
      },
    ],
  },
  {
    path: Locations.LOGIN,
    name: "Login",
    component: () => import("../views/Login.vue"), // Login page outside of the Layout
    meta: { title: "Login" },
  },
  // {
  //   path: "/:pathMatch(.*)*", // Catch-all route for 404 pages
  //   name: "NotFound",
  //   component: () => import("../views/NotFound.vue"),
  //   meta: { title: "404 Not Found" },
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Modern History API
  routes,
});


router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuth()
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ path: Locations.LOGIN })
  } else if ((to.path === '/login' || to.path === '/forgot-password') && isAuthenticated) {
    next({ path: Locations.BASE }) 
  } else {
    next()
  }
});

export default router;

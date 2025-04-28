import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "../components/Layout.vue";
import { useAuth } from "../composables/useAuth";
import { Locations } from "../constants/locations";

const routes: Array<RouteRecordRaw> = [
	{
		path: Locations.BASE,
		name: "base",
		component: Layout,
		children: [],
		meta: { requiresAuth: true },
	},
	{
		path: Locations.LOGIN,
		name: "Login",
		component: () => import("../views/Login.vue"),
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
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

let isChildRoutesAdded = false;

function injectUserRoutes(role: string) {
	if (role === "admin") {
		console.log("admin");
		router.addRoute("base", {
			path: Locations.ADMIN_HOME,
			name: "AdminDashboard",
			component: () => import("../views/DashboardComponent.vue"),
			meta: { title: "Admin Dashboard", requiresAuth: true },
		});
	} else if (role === "super-admin") {
		router.addRoute("base", {
			path: "/admin-home",
			name: "SuperAdminDashboard",
			component: () => import("../views/DashboardComponent.vue"),
			meta: { title: "Super Admin Dashboard", requiresAuth: true },
		});
	}
}

router.beforeEach((to, _, next) => {
	const { isAuthenticated: rawAuth, userRole: rawRole } = useAuth();

	const isAuthenticated = !rawAuth;
	const userRole = rawRole || "admin";

	if (isAuthenticated && !isChildRoutesAdded) {
		injectUserRoutes(userRole);
		isChildRoutesAdded = true;

		next({ ...to, replace: true });
		return;
	}

	if (to.meta.requiresAuth && !isAuthenticated) {
		next({ path: Locations.LOGIN });
		return;
	}

	if (to.path === Locations.LOGIN && isAuthenticated) {
		next({ path: Locations.BASE });
		return;
	}

	next();
});

export default router;

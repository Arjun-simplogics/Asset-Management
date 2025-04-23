import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "../components/Layout.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		component: Layout, // Layout with Header, Sidebar, and Footer
		children: [
			{
				path: "",
				name: "Dashboard",
				component: () => import("../views/DashboardComponent.vue"), // Lazy-loaded Dashboard component
				meta: { title: "Dashboard" },
			},
		],
	},
	{
		path: "/login",
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

// Update document title based on route metadata
router.beforeEach((to, from, next) => {
	document.title = to.meta.title || "My Application";
	next();
});

export default router;

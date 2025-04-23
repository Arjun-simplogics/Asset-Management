import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
	state: () => ({
		token: "",
		user: null,
		roles: [] as string[],
		permissions: [] as string[],
	}),
	actions: {
		login(data: { token: string; user: any; roles: string[]; permissions: string[] }) {
			this.token = data.token;
			this.user = data.user;
			this.roles = data.roles;
			this.permissions = data.permissions;
		},
		logout() {
			this.token = "";
			this.user = null;
			this.roles = [];
			this.permissions = [];
		},
		setRoles(newRoles: string[]) {
			this.roles = newRoles;
		},
		setPermissions(newPermissions: string[]) {
			this.permissions = newPermissions;
		},
	},
	getters: {
		isAuthenticated: (state) => !!state.token, // Check if the user is logged in
	},
});

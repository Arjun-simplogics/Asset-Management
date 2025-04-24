// Base URL (loaded dynamically via environment config)
import config from "../environments/index"; // Your environment-specific setup

const BASE_URL = config.apiBaseURL;

// Controllers as constants
export const Controllers = {
	Auth: "AuthController",
	User: "UserController",
	Product: "ProductController",
} as const;

// Endpoints grouped by feature/module
export const Endpoints = {
	Auth: {
		Login: `${BASE_URL}/${Controllers.Auth}/login`,
		Logout: `${BASE_URL}/${Controllers.Auth}/logout`,
		Refresh: `${BASE_URL}/${Controllers.Auth}/refresh`,
	},
	User: {
		Profile: `${BASE_URL}/${Controllers.User}/profile`,
		Update: `${BASE_URL}/${Controllers.User}/update`,
		ChangePassword: `${BASE_URL}/${Controllers.User}/change-password`,
	},
	Product: {
		List: `${BASE_URL}/${Controllers.Product}/list`,
		Detail: (id: string) => `${BASE_URL}/${Controllers.Product}/detail/${id}`, // Dynamic route
		Create: `${BASE_URL}/${Controllers.Product}/create`,
	},
};

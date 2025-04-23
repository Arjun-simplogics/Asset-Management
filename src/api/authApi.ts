import axios from "axios";
import { Endpoints } from "./endpoints";

export const login = async (email: string, password: string) => {
	const response = await axios.post(Endpoints.Auth.Login, { email, password });
	return response.data; // Assume API returns user data and token
};

export const logout = () => {
	localStorage.removeItem("token"); // Clear token on logout
	window.location.href = "/login"; // Redirect to login page
};

export const fetchCurrentUser = async () => {
	const response = await axios.get("/auth/me");
	return response.data; // Return user details
};

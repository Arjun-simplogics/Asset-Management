import axios, { AxiosError } from "axios";
import { AuthResponse, AuthSuccessResponse } from "./interface.ts";
// import { RESPONSE_ERROR_CUSTOM_STATUS } from "@/apis/client";
import { Endpoints } from "../endpoints.ts";
import { axiosConfig, showError } from "../../plugins/utils/utils.fns.ts";

export const signIn = async (email: string, password: string): Promise<AuthResponse> => {
	try {
		const response = await axios.post(Endpoints.Auth.Login, { email, password }, axiosConfig());
		return {
			sucResponse: response.data as AuthSuccessResponse,
		};
	} catch (err) {
		if (err instanceof AxiosError && err.response) {
			const msg = err.response.data?.message || "Login failed. Please try again.";
			showError(msg);
			return {};
		} else {
			showError("An unexpected error occurred.");
			throw err;
		}
	}
};

export const login = async (email: string, password: string) => {
	const response = await axios.post(Endpoints.Auth.Login, { email, password });
	return response.data; // Assume API returns user data and token
};

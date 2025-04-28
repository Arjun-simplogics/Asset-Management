/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { LocalStorageKeys } from "../constants";
import { Locations } from "../constants/locations";
import { showError, showSucess } from "../plugins/utils/utils.fns";
// import { logout } from "./authApi";

// Attach token to each request using an interceptor
axios.interceptors.request.use(
	function (config: InternalAxiosRequestConfig) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

// Handle response errors globally (e.g., unauthorized or expired token)
axios.interceptors.response.use(
	(response) => {
		return handleResponse(response);
	},
	(error) => {
		return handleResponse(error.response);
	}
);

const handleResponse = (response: AxiosResponse<any, any>) => {
	if (!response || !response.status) {
		showError("SOMETHING_WENT_WRONG");
		return Promise.reject(response);
	}
	if (response && response.status && [401].includes(response.status)) {
		sessionStorage.removeItem(LocalStorageKeys.TOKEN);
		sessionStorage.removeItem(LocalStorageKeys.ROLE);
		showError(response.data && response.data.message ? response.data.message : "SOMETHING_WENT_WRONG");
		window.location.href = Locations.LOGIN;
		return Promise.reject(response);
	}
	if (response && response.status && [403].includes(response.status)) {
		// logout();
		showError(response.data && response.data.message ? response.data.message : "FORBIDDEN");
		window.location.href = Locations.LOGIN;
		return Promise.reject(response);
	}
	if (
		response &&
		response.data &&
		response.status === 200 &&
		!response.data.status &&
		response.data.messageCode === 400
	) {
		showError(response.data.message ? response.data.message : "SOMETHING_WENT_WRONG");
		return Promise.reject(response);
	}
	if (response && response.status && [400, 404].includes(response.status)) {
		showError(response.data && response.data.message ? response.data.message : "SOMETHING_WENT_WRONG");
		return Promise.reject(response);
	}
	if (
		(response && response.status && response.status.toString().startsWith("4")) ||
		response.status.toString().startsWith("5")
	) {
		showError(response.data && response.data.message ? response.data.message : "SOMETHING_WENT_WRONG");
		return Promise.reject(response);
	}
	if (response && !response.status) {
		showError("SOMETHING_WENT_WRONG");
		return Promise.reject(response);
	}
	if (
		response &&
		response.data &&
		response.data.status &&
		response.data.messageCode === 1 &&
		response.data.message &&
		response.config.method !== "get" &&
		!response.config.url?.includes("/signin")
	) {
		showSucess(response.data.message);
	}
	return response;
};

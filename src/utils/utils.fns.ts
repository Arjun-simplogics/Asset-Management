import { AxiosRequestConfig } from "axios";
import { ElNotification } from "element-plus";
import { LocalStorageKeys } from "../constants";
import { Config } from "../config";

export const showError = (msg: string): void => {
	ElNotification.error({
		message: msg,
	});
};

export const showSucess = (msg: string): void => {
	ElNotification.success({
		message: msg,
	});
};

export const showWarning = (msg: string): void => {
	ElNotification.warning({
		message: msg,
	});
};

export const showInfo = (msg: string): void => {
	ElNotification.info({
		message: msg,
	});
};

export const axiosConfig = (): AxiosRequestConfig => ({
	headers: {
		"Authorization": `Bearer ${sessionStorage.getItem(LocalStorageKeys.TOKEN)}`,
		"Accept-Language": Config.defaultLanguage,
	},
});

export const axiosMultiPartConfig = (): AxiosRequestConfig => ({
	headers: {
		"Authorization": `Bearer ${sessionStorage.getItem(LocalStorageKeys.TOKEN)}`,
		"Accept-Language": Config.defaultLanguage,
		"Content-Type": "multpart/form-data",
	},
});

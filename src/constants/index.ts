
export enum Language {
	ENGLISH = "en",
	JAPANESE = "ja",
}

export enum APIStatus {
	FULFILLED = "FULFILLED",
	REJECTED = "REJECTED",
}

export const mustHaveLetter = /[a-zA-Z]/;

export const imageRegex = /^(?=.*\bimage\b|\btext\b).*/;

export const priceRegex = /^[0-9]+$/;

export const quantityRegex = /^[0-9]+((,|\.)?[0-9])*\s?(g|kg|Kg|KG|ml|L|個|キログラム|グラム)?$/;

export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const phoneNumberRegex = /^(?:\+\d{1,3})?\d{10,}$/;

export const numberRegex = /^[0-9]+$/;

export const cgpaRegex = /^(10(\.0+)?|[0-9](\.\d+)?)$/;

export const whiteSpace = /^\s*$/;

export const positiveNumbers = /^[0-9]\d*$/;

export enum SessionStorageKeys {
	TOKEN = "TOKEN",
}

export enum Roles {
	ADMIN = "ADMIN",
	USER = "USER",
}
const env = import.meta.env.MODE; // Vite's environment variable

let config;

if (env === "development") {
	config = await import("./env.development");
} else if (env === "qa") {
	config = await import("./env.qa");
} else if (env === "uat") {
	config = await import("./env.uat");
} else {
	throw new Error(`Unsupported environment: ${env}`);
}

export default config.default;

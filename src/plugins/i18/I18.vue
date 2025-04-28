<template>
	<span>{{ translatedText }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import en from "./json/en.json";

interface JSONData {
	[name: string]: string;
}

export function i18Get(key: string) {
	const translations: JSONData = en;
	return translations[key] ? translations[key] : key;
}

export default defineComponent({
	props: {
		tkey: {
			type: String,
			default: "",
		},
	},
	computed: {
		translatedText(): string {
			return i18Get(this.tkey);
		},
	},
});
</script>

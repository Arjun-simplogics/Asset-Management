<template>
	<div class="flex flex-col h-screen">
		<!-- Header -->
		<div class="h-16">
			<Header />
		</div>

		<!-- Main Content -->
		<div class="flex flex-1 overflow-hidden">
			<!-- Sidebar -->
			<Sidebar />

			<!-- Main Content -->
			<main class="flex-1 overflow-auto p-6 bg-gray-200">
				<router-view />
			</main>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";

export default defineComponent({
	name: "Layout",
	components: { Header, Sidebar },
});
</script>

<style scoped>
/* Optional: Custom styles */
</style>

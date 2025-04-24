<template>
	<header class="bg-blue-500 text-white shadow-md z-40 w-full">
		<div class="container mx-auto flex items-center justify-between p-4">
			<!-- Logo -->
			<div class="flex items-center space-x-3">
				<img src="../assets/Aspial_logo.png" alt="Logo" class="h-8 w-8 object-contain" />
				<span class="text-lg font-semibold">MyApp</span>
			</div>

			<!-- Navigation Links -->
			<nav class="hidden md:flex items-center space-x-6">
				<a href="#" class="hover:text-gray-200">Home</a>
				<a href="#" class="hover:text-gray-200">About</a>
				<a href="#" class="hover:text-gray-200">Contact</a>
			</nav>

			<!-- Mobile Menu Toggle -->
			<button
				class="md:hidden flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
				@click="toggleMobileMenu"
			>
				<svg
					v-if="!isMobileMenuOpen"
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
				</svg>
				<svg
					v-else
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>

		<!-- Mobile Menu -->
		<div v-if="isMobileMenuOpen" class="md:hidden bg-blue-600">
			<nav class="flex flex-col items-center py-4 space-y-2">
				<a href="#" class="text-white hover:text-gray-200">Home</a>
				<a href="#" class="text-white hover:text-gray-200">About</a>
				<a href="#" class="text-white hover:text-gray-200">Contact</a>
			</nav>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "Header",
	setup() {
		// State with explicit type
		const isMobileMenuOpen = ref<boolean>(false);

		// Method with explicit type annotation
		const toggleMobileMenu = (): void => {
			isMobileMenuOpen.value = !isMobileMenuOpen.value;
		};

		return {
			isMobileMenuOpen,
			toggleMobileMenu,
		};
	},
});
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>

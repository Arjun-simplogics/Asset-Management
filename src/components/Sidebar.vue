<template>
	<div class="bg-gray-800 text-white flex flex-col overflow-auto" :class="!isSidebarOpen ? 'w-60' : 'w-20'">
		<div class="flex items-center justify-end bg-gray-900">
			<div
				class="p-2 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
				@click="toggleSidebar"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</div>
		</div>

		<nav class="mt-4">
			<ul class="space-y-4">
				<li>
					<a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-700">Dashboard</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-700">Settings</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-700">Profile</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-700">Logout</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-700">Dashboard</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-700">Settings</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-700">Profile</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-700">Logout</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-700">Settings</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-700">Profile</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-700">Logout</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-700">Dashboard</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-700">Settings</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-700">Profile</a>
				</li>
				<li>
					<a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-700">Logout</a>
				</li>
			</ul>
		</nav>
	</div>

	<div v-if="isSidebarOpen" class="fixed inset-0 bg-black bg-opacity-50 z-20" @click="toggleSidebar"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "Sidebar",
	setup() {
		const isSidebarOpen = ref<boolean>(false);

		const toggleSidebar = (): void => {
			isSidebarOpen.value = !isSidebarOpen.value;
		};

		return {
			isSidebarOpen,
			toggleSidebar,
		};
	},
});
</script>

<style scoped>
/* Optional custom styles for the sidebar */
</style>

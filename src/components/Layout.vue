<template>
	<div class="flex h-screen">
		<TemplateSidebar />

		<div class="flex flex-col flex-1 overflow-hidden">
			<div class="h-16">
				<TemplateHeader />
			</div>

			<main class="flex-1 overflow-auto p-6 bg-gray-200">
				<router-view />
			</main>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TemplateHeader from "./Header.vue";
import TemplateSidebar from "./Sidebar.vue";

export default defineComponent({
	name: "Layout",
	components: { TemplateHeader, TemplateSidebar },
});
</script>

<style scoped>
/* Optional: Custom styles */
</style>

<template>
	<div class="min-h-screen flex items-center justify-center bg-gray-100">
		<transition name="form-swap" mode="out-in">
			<div v-if="showLoginForm" key="login" class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
				<div>
					<div class="flex justify-center">
						<img src="../assets/Aspial_logo.png" alt="Logo" class="h-16 w-16 object-contain" />
					</div>
					<h1 class="text-2xl font-semibold text-center text-gray-700 mt-4">Log In</h1>
					<form class="mt-6" @submit.prevent="handleSubmit">
						<div class="mb-4">
							<label for="email" class="block text-sm font-medium text-gray-600">Email</label>
							<input
								id="email"
								v-model="email"
								type="email"
								class="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
								placeholder="Enter your email"
								required
							/>
						</div>
						<div class="mb-4">
							<label for="password" class="block text-sm font-medium text-gray-600">Password</label>
							<input
								id="password"
								v-model="password"
								type="password"
								class="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
								placeholder="Enter your password"
								required
							/>
						</div>
						<button
							type="submit"
							class="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 rounded-3xl"
							@click="handleLogin"
						>
							Login
						</button>
					</form>
					<p class="mt-4 text-sm text-center text-gray-600">
						Don't have an account?
						<a href="#" class="text-blue-500 hover:underline" @click="showLoginForm = !showLoginForm">Sign up</a>
					</p>
				</div>
			</div>

			<div v-else key="signup" class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
				<div>
					<div class="flex justify-center">
						<img src="../assets/Aspial_logo.png" alt="Logo" class="h-16 w-16 object-contain" />
					</div>
					<h1 class="text-2xl font-semibold text-center text-gray-700 mt-4">Sign Up</h1>
					<form class="mt-6" @submit.prevent="handleSignup">
						<div class="mb-4">
							<label for="email" class="block text-sm font-medium text-gray-600">Email</label>
							<input
								id="email"
								v-model="email"
								type="email"
								class="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
								placeholder="Enter your email"
								required
							/>
						</div>
						<div class="mb-4">
							<label for="password" class="block text-sm font-medium text-gray-600">Password</label>
							<input
								id="password"
								v-model="password"
								type="password"
								class="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
								placeholder="Enter your password"
								required
							/>
						</div>
						<div class="mb-4">
							<label for="confirm-password" class="block text-sm font-medium text-gray-600">Confirm Password</label>
							<input
								id="confirm-password"
								v-model="confirmPassword"
								type="password"
								class="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
								placeholder="Confirm your password"
								required
							/>
						</div>
						<button
							type="submit"
							class="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 rounded-3xl"
						>
							Sign Up
						</button>
					</form>
					<p class="mt-4 text-sm text-center text-gray-600">
						Already have an account?
						<a href="#" class="text-blue-500 hover:underline" @click="toggleForm">Login</a>
					</p>
				</div>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Router, useRouter } from "vue-router";

export default defineComponent({
	name: "Login",
	setup() {
		const router: Router = useRouter();
		const email = ref<string>("");
		const password = ref<string>("");
		const confirmPassword = ref<string>("");
		const showLoginForm = ref<boolean>(true);

		const handleSubmit = (): void => {
			console.log("Login Email:", email.value);
			console.log("Login Password:", password.value);
		};

		const handleSignup = (): void => {
			console.log("Signup Email:", email.value);
			console.log("Signup Password:", password.value);
			console.log("Confirm Password:", confirmPassword.value);
		};

		const toggleForm = (): void => {
			showLoginForm.value = !showLoginForm.value;
		};

		function handleLogin() {
			router.push("/");
		}

		return {
			email,
			password,
			confirmPassword,
			showLoginForm,
			handleSubmit,
			handleSignup,
			toggleForm,
			handleLogin,
		};
	},
});
</script>

<style scoped>
.form-swap-enter-active,
.form-swap-leave-active {
	transition: transform 0.5s;
	/* transition: scale 0.5s; */
}
.form-swap-enter-from {
	transform: skew(0deg, 0deg);
	/* transform: scale(0); */
	/* scale: 0; */
}
.form-swap-leave-to {
	transform: skew(0deg, 180deg);
	/* transform: scale(0); */
	/* scale: 1; */
}
</style>

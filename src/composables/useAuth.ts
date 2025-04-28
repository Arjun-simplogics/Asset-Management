// import axios from 'axios';
// import { ref, computed } from 'vue';

// export function useAuth() {
//   const user = ref(JSON.parse(localStorage.getItem('user') || '{}')); // Retrieve user from localStorage
//   const isAuthenticated = computed(() => !!localStorage.getItem('token')); // Check if token exists

//   const handleLogin = (data: { token: string; user: any }) => {
//     localStorage.setItem('token', data.token); // Store token
//     localStorage.setItem('user', JSON.stringify(data.user)); // Store user data
//     user.value = data.user; // Update reactive state
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Clear token
//     localStorage.removeItem('user'); // Clear user data
//     user.value = {}; // Reset reactive state
//   };

//   const fetchUser = async () => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       // Optionally refetch user details from API
//       const response = await axios.get('/auth/me', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       user.value = response.data;
//       localStorage.setItem('user', JSON.stringify(response.data)); // Update localStorage
//     }
//   };

//   return {
//     user,
//     isAuthenticated,
//     handleLogin,
//     handleLogout,
//     fetchUser,
//   };
// }

export function useAuth() {
	const token = localStorage.getItem("access_token");
	const userRole = localStorage.getItem("access_token");
	const isAuthenticated = !!token;
	return { isAuthenticated, userRole };
}

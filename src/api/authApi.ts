// src/api/authApi.ts
import axiosInstance from './axiosInstance';

export const login = async (email: string, password: string) => {
  const response = await axiosInstance.post('/auth/login', { email, password });
  return response.data; // Assume API returns user data and token
};

export const logout = () => {
  localStorage.removeItem('token'); // Clear token on logout
  window.location.href = '/login'; // Redirect to login page
};

export const fetchCurrentUser = async () => {
  const response = await axiosInstance.get('/auth/me');
  return response.data; // Return user details
};

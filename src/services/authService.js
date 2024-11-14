import axios from 'axios';

const API_URL = 'https://car-management-app-production.up.railway.app/api/auth';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "An error occurred while registering";
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Invalid username or password";
  }
};

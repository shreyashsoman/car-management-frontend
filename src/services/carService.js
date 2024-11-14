import axios from 'axios';

const API_URL = 'https://car-management-app-production.up.railway.app/api/cars';

export const createCar = async (carData, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(API_URL, carData, config);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "An error occurred while creating the car";
  }
};

export const getAllCars = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "An error occurred while retrieving cars";
  }
};

export const getCarById = async (carId) => {
  try {
    const response = await axios.get(`${API_URL}/${carId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "An error occurred while retrieving the car";
  }
};

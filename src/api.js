import axios from "axios";

// Replace with your deployed backend's API base URL
const API_BASE_URL = "https://portfolio-backend-kfna.onrender.com/api"; // Correct backend URL

// Send contact form data
export const sendContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact`, formData);
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error.response?.data || error.message);
    throw error;
  }
};

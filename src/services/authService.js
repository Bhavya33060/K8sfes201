import axios from "axios";

const API_URL = "http://localhost:30083/back1/auth";  // ✅ Corrected path

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password }, {
    withCredentials: true
  });
  localStorage.setItem("token", response.data);
  return response.data;
};

export const signup = async (username, email, password) => {
  return axios.post(`${API_URL}/signup`, { username, email, password }, {
    withCredentials: true
  });
};

export const logout = () => {
  localStorage.removeItem("token");
};

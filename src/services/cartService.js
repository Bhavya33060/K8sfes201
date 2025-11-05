import axios from "axios";

// ✅ Correct backend path (cart is under /api/cart)
const CART_API_URL = "http://localhost:30083/back1/api/cart";

export const addToCart = async (userId, productId) => {
  return axios.post(`${CART_API_URL}/add`, {
    userId,
    productId,
    quantity: 1,
  });
};

export const getCartItems = async (userId) => {
  const response = await axios.get(`${CART_API_URL}/user/${userId}`);
  return response.data;
};

export const clearCart = async (userId) => {
  return axios.delete(`${CART_API_URL}/clear/${userId}`);
};

export const removeCartItem = async (cartItemId) => {
  return axios.delete(`${CART_API_URL}/remove/${cartItemId}`);
};

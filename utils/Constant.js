// App configuration
export const APP_NAME = "CRUD Dashboard";
export const BASE_URL = "http://localhost:3000";
export const API_URL = `${BASE_URL}/api`;

// Page titles
export const getTitle = (title) => `${title} | ${APP_NAME}`;

export const getBaseUrl = () => {
  return BASE_URL;
};

// Routes
export const ROUTES = {
  HOME: "/",
  USERS: "/users",
  PRODUCTS: "/products",
};

// API endpoints
export const API_ENDPOINTS = {
  USERS: `${API_URL}/users`,
  PRODUCTS: `${API_URL}/products`,
  AUTH: `${API_URL}/auth`
};

// Date formats
export const DATE_FORMAT = "YYYY-MM-DD";
export const DATETIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
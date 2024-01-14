import { myAxios } from "./helper";

// Function to set the authorization header with JWT token
const setAuthToken = (token) => {
  if (token) {
    myAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete myAxios.defaults.headers.common['Authorization'];
  }
};

// Interceptor to set the token after successful login
export const setupAxiosInterceptors = (token) => {
  setAuthToken(token);

  // Request interceptor
  myAxios.interceptors.request.use(
    (config) => {
      // Add any additional request logic here
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  myAxios.interceptors.response.use(
    (response) => {
      // Add any additional response logic here
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export default myAxios;

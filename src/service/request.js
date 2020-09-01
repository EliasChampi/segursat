import axios from "axios";
import cache from "../helpers/cache";
/**
 * creating a new axios instance
 */
const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 100000,
});

/**
 * this is main configuration for request data
 */
request.interceptors.request.use(
  (config) => {
    if (cache.hasThis("user")) {
      config.headers["x-access-token"] = cache.getItem("user").token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * this is main configuration for given data from api
 */
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let errData = {
      message: "No tienes conexion a Internet",
    };
    if (error.response) {
      errData = error.response.data;
      switch (error.response.status) {
        case 401:
          cache.removeItem("user");
          break;
        default:
          break;
      }
    }
    return Promise.reject(errData);
  }
);

export default request;

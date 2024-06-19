import axios from 'axios';
import { ErrorMessages } from './errors';
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const setBaseURL = (url: string) => {
  apiClient.defaults.baseURL = url;
};
apiClient.interceptors.response.use(
  (response: any) => {
    return Promise.resolve(response);
  },
  (error: any) => {
    let errorMessage = ErrorMessages.UNEXPECTED_ERROR;

    if (error.response) {
      switch (error.response.status) {
        case 400:
          errorMessage = ErrorMessages.BAD_REQUEST;
          break;
        case 401:
          errorMessage = ErrorMessages.UNAUTHORIZED;
          break;
        case 403:
          errorMessage = ErrorMessages.FORBIDDEN;
          break;
        case 404:
          errorMessage = ErrorMessages.NOT_FOUND;
          break;
        case 500:
          errorMessage = ErrorMessages.INTERNAL_SERVER_ERROR;
          break;
        default:
          errorMessage =
            error.response.data.message || ErrorMessages.UNEXPECTED_ERROR;
      }
    } else if (error.request) {
      errorMessage = ErrorMessages.NETWORK_ERROR;
    } else {
      errorMessage = error.message;
    }

    return Promise.reject(errorMessage);
  }
);
export { apiClient };
export const get = (url: string, params = {}, config = {}) => {
  return apiClient.get(url, {
    ...config,
    params,
  });
};

export const post = (url: string, data = {}, config = {}) => {
  return apiClient.post(url, data, config);
};

export const put = (url: string, data = {}, config = {}) => {
  return apiClient.put(url, data, config);
};

export const del = (url: string, config = {}) => {
  return apiClient.delete(url, config);
};

export default {
  get,
  post,
  put,
  del,
  setBaseURL,
};

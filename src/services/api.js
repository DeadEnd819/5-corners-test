import axios from 'axios';
import {REQUEST_TIMEOUT} from '../const';

export const createAPI = () => {
  const api = axios.create({
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

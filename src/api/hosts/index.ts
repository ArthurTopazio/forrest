import axios, { AxiosRequestConfig } from 'axios';

const host = axios.create({
  baseURL: process.env.REACT_APP_API_URL1,
});

const authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL1,
});

const authInterceptor = (config: AxiosRequestConfig) => {
  if (config.headers === undefined) {
    // eslint-disable-next-line no-param-reassign
    config.headers = {};
  } else {
    // eslint-disable-next-line no-param-reassign
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return config;
};

authHost.interceptors.request.use(authInterceptor);

export {
  host,
  authHost,
};

import axios from 'axios';

const serviceAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

serviceAxios.interceptors.request.use(config => ({
  ...config,
  params: {
    ...config.params,
  },
}));

serviceAxios.interceptors.response.use(
  res => res,
  error => {
    throw error;
  },
);

export default serviceAxios;

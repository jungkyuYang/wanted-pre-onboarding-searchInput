import axios from 'axios';

import { API_PATH } from '../constants/constatns';

const axiosInstance = axios.create({ baseURL: API_PATH.URL });

axiosInstance.interceptors.request.use(
	config => {
		return config;
	},
	error => Promise.reject(error),
);

export default axiosInstance;

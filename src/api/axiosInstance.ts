import axios from 'axios';

import { API_PATH } from '../constants/constatns';

const axiosInstance = axios.create({ baseURL: API_PATH.URL });

axiosInstance.interceptors.request.use(
	config => {
		return config;
	},
	error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
	response => {
		if (response.status === 404) {
			console.error('404 페이지');
		}
		return response;
	},
	async error => {
		if (error.response?.status === 401) {
			const response = await axios.request(error.config);
			return response;
		}
		return Promise.reject(error);
	},
);

export default axiosInstance;

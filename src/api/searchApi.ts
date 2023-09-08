import axiosInstance from './axiosInstance';

import { getCacheByKey, setCacheByExpireTime } from '../utils/cache';

export const searchApi = {
	getSearch: async (query: string) => {
		const cacheItem = await getCacheByKey(query);

		if (cacheItem) {
			return cacheItem;
		}

		console.info('calling api');
		const response = await axiosInstance.get(`/sick`, { params: { q: query } });

		setCacheByExpireTime({ key: query, value: response.data, expireTime: 24 * 60 * 60 * 1000 });
		return response.data;
	},
};

export default searchApi;

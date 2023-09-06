import axiosInstance from './axiosInstance';

export const searchApi = {
	getSearch: async (query: string) => {
		const response = await axiosInstance.get(`/sick`, { params: { q: query } });
		return response.data;
	},
};

export default searchApi;

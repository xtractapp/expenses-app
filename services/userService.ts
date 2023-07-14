import { client } from './axiosClient';

const service = {
  login: async (email: string, password: string) => (await client()).post('/api/v2/users/login', { email, password }),
};

export default service;

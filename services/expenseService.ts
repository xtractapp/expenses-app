import { client } from './axiosClient';
import { GenericObject } from '../types/types';

const service = {
  list: async (filters: GenericObject) => (await client()).get('/api/expenses/expenses', { params: filters }),
};

export default service;

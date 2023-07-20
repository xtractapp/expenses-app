import { client } from './axiosClient';
import { type GenericObject } from '../types/types';

const service = {
  list: async (filters: GenericObject) =>
    await (await client()).get('/api/expenses/expenses', { params: filters }),
};

export default service;

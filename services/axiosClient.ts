import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import Constants from '../constants/General';

import { API_URL } from '@env';

export const client = async () => {
  const axiosClient = axios.create();
  const accessToken = await SecureStore.getItemAsync(Constants.apiToken);

  axiosClient.defaults.baseURL = API_URL;
  axiosClient.defaults.headers.common['Accept'] = 'application/json';
  axiosClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  axiosClient.defaults.timeout = 180000;

  return axiosClient;
};

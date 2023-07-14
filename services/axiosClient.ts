import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import Constants from '../constants/General';

export const client = async () => {
  const axiosClient = axios.create();
  const accessToken = await SecureStore.getItemAsync(Constants.apiToken);

  axiosClient.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
  axiosClient.defaults.headers.common['Accept'] = 'application/json';
  axiosClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  axiosClient.defaults.timeout = 180000;

  return axiosClient;
};

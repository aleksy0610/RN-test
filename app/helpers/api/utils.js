import { AsyncStorage } from 'react-native';
import Constants from './constants';

const APIUtils = {
  convertQueryString: (queryParams = {}) => {
    const esc = encodeURIComponent;
    const query = Object.keys(queryParams)
      .map(key => `${esc(key)}=${esc(queryParams[key])}`)
      .join('&');

    return query ? `?${query}` : '';
  },

  getAccessToken: async () => {
    const token = await AsyncStorage.getItem(Constants.IDENTIFIERS.ACCESS_TOKEN);
    return token;
  },

  setAccessToken: async (token) => {
    AsyncStorage.setItem(Constants.IDENTIFIERS.ACCESS_TOKEN, token);
  },

  getRefreshToken: async () => {
    const token = await AsyncStorage.getItem(Constants.IDENTIFIERS.REFRESH_TOKEN);
    return token;
  },

  setRefreshToken: async (refreshToken) => {
    AsyncStorage.setItem(Constants.IDENTIFIERS.REFRESH_TOKEN, refreshToken);
  },

  setExpireTime: async (newTime) => {
    AsyncStorage.setItem(Constants.IDENTIFIERS.EXPIRE_TIME, newTime.toString());
  },

  getExpireTime: async () => {
    const lastUpdateTime = await AsyncStorage.getItem(Constants.IDENTIFIERS.EXPIRE_TIME);
    return lastUpdateTime;
  },

};

export default APIUtils;

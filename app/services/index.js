import { Utils } from '../helpers';
import APIClient from '../helpers/api';
import APIConstants from '../helpers/api/constants';

const sendDataAPI = (data) => {
  const path = '/post';
  const url = `${Utils.serverUrl.API_BASE_URL}${path}`;
  const params = data;
  const client = new APIClient(url, APIConstants.HTTPMethod.POST);
  return client.sendRequest(params);
}

export { 
  sendDataAPI,
};

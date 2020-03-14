import {I18nManager, Platform, Alert} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import * as axios from 'axios';
import {BASE_URL} from '../config';
import {errorMessage, showCorrectPlateNumber} from '../utils/global';
import strings from '../strings';
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';
axios.defaults.headers.common['IsIOS'] =
  Platform.OS == 'ios' ? 'true' : 'false';

function handleRequestError(data) {
  NetInfo.fetch().then(state => {
    console.log('isConnectedisConnected', state.isConnected);

    setTimeout(() => {
      if (!state.isConnected) {
        errorMessage(strings.noInternetConnection);
      } else {
        if (!data) {
          errorMessage(strings.anErrorOccured);
        }
      }
    });
  });
}

export const Backend = {
  token: '',
  lang: I18nManager.isRTL ? 'ar' : 'en',

  getTraining(page) {
    return axios
      .get(`389/0`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .then(function(response) {
        console.log('responseresponseresponseresponseresponse', JSON.parse(response.data));
        return response;
      })
      .catch(function(err) {
        console.log('errerrerrerrerr', err);

        const response = err.response ? err.response.data : undefined;

        // console.log('errerrerrerrerrerr', err.message);
        // if (err.message === 'Network Error') {
        // }
        handleRequestError(response);
        return err;
      });
  },
};

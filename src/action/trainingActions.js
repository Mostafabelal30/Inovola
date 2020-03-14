import {GET_TRAINING_DETAILS} from './types';
import {Backend} from '../services/Backend';

export const getTraining = () => {
  return async (dispatch, getState) => {
    await Backend.getTraining().then(response => {
      console.log('getWorkerStationgetWorkerStation', response);
      dispatch({
        type: GET_TRAINING_DETAILS,
        data: JSON.parse(response.data),
      });
    });
  };
};

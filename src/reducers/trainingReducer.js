import * as ActionTypes from '../action/types';

const INIT_STATE = {
  trainingData: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_TRAINING_DETAILS:
      return {...state, trainingData: action.data};
    default:
      return state;
  }
};

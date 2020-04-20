import {DATA_REQUEST} from './constants';
const initialState = {
  responceData: false,
};
const dataReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DATA_REQUEST:
      return {...state, responceData: action.data};
    default:
      return state;
  }
};
export default dataReducer;

import {TOGGLE_FLAG, LOGIN_AUTHENICATION, IS_LOGING, STATUS} from './constants';
const initialState = {
  homeFlag: false,
  loginresponse: false,
  start: true
};
const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_FLAG:
      return {...state, homeFlag: action.data};
    case LOGIN_AUTHENICATION:
      return {...state, loginresponse: action.data, isLoading: false, start: true};
    case IS_LOGING:
      return {...state, isLoading: action.data};
    case STATUS:
      return {...state, status: action.data,isLoading:false};
    default:
      return state;
  }
};
export default homeReducer;

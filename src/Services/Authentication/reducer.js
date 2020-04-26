import {TOGGLE_FLAG, LOGIN_AUTHENICATION, IS_LOGING, STATUS} from './constants';
const initialState = {
  homeFlag: false,
  loginResponce: false,
  start: true
};
const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_FLAG:
      return {...state, homeFlag: action.data};
    case LOGIN_AUTHENICATION:
      return {...state, loginResponce: action.data, isLoding: false, start: true};
    case IS_LOGING:
      return {...state, isLoding: action.data};
    case STATUS:
      return {...state, status: action.data,isLoding:false};
    default:
      return state;
  }
};
export default homeReducer;

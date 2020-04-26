import {DATA_REQUEST, SEARCHING, CONCEPT_DATA} from './constants';
const initialState = {
  responceData: false,
  searchedData:[]
};
const dataReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONCEPT_DATA:
      return {...state, conceptData: action.data};
    case DATA_REQUEST:
      return {...state, responceData: action.data};
    case SEARCHING :
      return {...state,searchedData:action.data}
    default:
      return state;
  }
};
export default dataReducer;

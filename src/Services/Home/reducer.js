import {TOGGLE_FLAG} from './constants'
const initialState ={
    homeFlag : false
};
const homeReducer = (state=initialState , action ={})=> {
    switch (action.type){
        case TOGGLE_FLAG : 
        return {...state,homeFlag:action.data}
        default :
        return state

    }
}
export default homeReducer;

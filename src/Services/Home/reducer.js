import {TOGGLE_FLAG,LOGIN_AUTHENICATION,IS_LOGING} from './constants'
const initialState ={
    homeFlag : false,
    loginResponce:false,
    // isLoding:false
};
const homeReducer = (state=initialState , action ={})=> {
    switch (action.type){
        case TOGGLE_FLAG : 
        return {...state,homeFlag:action.data}
        case  LOGIN_AUTHENICATION: 
        return {...state,loginResponce:action.data,isLoding:false}
        case  IS_LOGING :
        return {...state,isLoding:action.data}
        default :
        return state

    }
}
export default homeReducer;

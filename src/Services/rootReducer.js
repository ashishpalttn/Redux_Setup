import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './Home/reducer'


 const reducer = combineReducers({homeReducer});




 const store = createStore(reducer,applyMiddleware(thunk))




 export default store ; 
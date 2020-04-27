import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './Authentication/reducer';
import dataReducer from './Data/reducer';

const reducer = combineReducers({homeReducer, dataReducer});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;

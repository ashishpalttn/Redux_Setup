import { LOGIN_AUTHENICATION, IS_LOGING, STATUS} from './constants';
import AsyncStorage from '@react-native-community/async-storage';
import {apiConfig} from '../../Config/env'
export const removeStatus = () => dispatch =>{
  console.log('Status Removed........')
  dispatch({
    type : STATUS,
    data : 200
  })
}
export const deleteToken = () => dispatch => {
  AsyncStorage.removeItem('token').then(res => {
    console.log('tokenDeleten..........');
    dispatch({
      type: LOGIN_AUTHENICATION,
      data: '',
    });
  });
};

export const storedToken = () => dispatch => {
  dispatch({
    type: IS_LOGING,
    data: true,
  });
  
  AsyncStorage.getItem('token').then(res => {
    console.log('store_check', res);
    dispatch({
      type: LOGIN_AUTHENICATION,
      data: res,
    });
  });
}
export const loginAuthentication = (username, password) => dispatch => {
  dispatch({
    type : STATUS,
    data : 200
  })
  dispatch({
    type : IS_LOGING,
    data : true
  })

  storeData = async token => {
    await AsyncStorage.setItem('token', token);
  };
  fetch(
    apiConfig.authenticationApi.loginUserHandle,

    {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    },
  ).then(responce => {
    dispatch({
      type: STATUS,
      data: responce.status,
    });
    let token = responce.headers.map.authorization;
    token = token.slice(7);

    dispatch({
      type: LOGIN_AUTHENICATION,
      data: token,
    });
    storeData(token);
  });
};

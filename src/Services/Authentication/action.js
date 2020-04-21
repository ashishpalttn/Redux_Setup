import {TOGGLE_FLAG, LOGIN_AUTHENICATION, IS_LOGING} from './constants';
import AsyncStorage from '@react-native-community/async-storage';
export const deleteToken = () => dispatch => {
  AsyncStorage.removeItem('token').then(res => {
    console.log('tokenDeleten..........');
    dispatch({
      type: LOGIN_AUTHENICATION,
      data: '',
    });
  });
};

export const storedData = () => dispatch => {
  AsyncStorage.getItem('token').then(res => {
    console.log('store_check', res);
    dispatch({
      type: LOGIN_AUTHENICATION,
      data: res,
    });
  });
};
export const loginAuthentication = (username, password) => dispatch => {
  storeData = async token => {
    await AsyncStorage.setItem('token', token);
  };
  fetch(
    'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-security/login',

    {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    },
  ).then(responce => {
    let token = responce.headers.map.authorization;
    token = token.slice(7);

    dispatch({
      type: LOGIN_AUTHENICATION,
      data: token,
    });
    storeData(token);
  });
  dispatch({
    type: IS_LOGING,
    data: true,
  });
};

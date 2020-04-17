import {TOGGLE_FLAG, LOGIN_AUTHENICATION, IS_LOGING} from './constants';

export const toggleFlag = () => dispatch => {
  dispatch({
    type: TOGGLE_FLAG,
    data: 'true',
  });
};
export const loginAuthentication = (username, password) => dispatch => {
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
    // console.log(responce.status)
    let token = responce.headers.map.authorization;
    token = token.slice(7);
    // this.storeData(token);

    dispatch({
      type: LOGIN_AUTHENICATION,
      data: token,
    });
  });
  dispatch({
    type: IS_LOGING,
    data: true,
  });
};

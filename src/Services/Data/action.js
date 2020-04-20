import {DATA_REQUEST} from './constants';
export const dataRequest = (token) => dispatch => {
    fetch(
        'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-product-scan/stores',
        {
          method: 'GET',
          headers: {
            authorization:token,
          },
        },
      )
      .then(responce=>{
          return responce.json()
      })
      .then(data=>{
        dispatch({
          type: DATA_REQUEST,
          data: data,
        });
      })
    

};

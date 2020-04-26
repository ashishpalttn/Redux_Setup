import {DATA_REQUEST, SEARCHING, CONCEPT_DATA} from './constants';
import {apiConfig} from '../../Config/env'

export const conceptDataRequest = (token) => dispatch => {
  fetch( apiConfig.storeApi.conceptData ,
    {
      method: 'GET',
      headers: {
        authorization:token,
      },
    },
  )
    .then(responce => {
      return responce.json();
    })
    .then(data => {
      // console.log("CONCEPT_DATA",data)
      dispatch({
        type: CONCEPT_DATA,
        data: data,
      });
    });
};

export const search = ( searchInput  ,token) => dispatch => {
  fetch( apiConfig.storeApi.searchData+searchInput+'?',
    {
      method: 'GET',
      headers: {
        authorization:token,
      },
    },
  )
    .then(responce => {
      return responce.json();
    })
    .then(data => {
      dispatch({
        type: SEARCHING,
        data: data,
      });
    });
};
export const dataRequest = token => dispatch => {
  fetch(apiConfig.storeApi.listData,
    {
      method: 'GET',
      headers: {
        authorization: token,
      },
    },
  )
    .then(responce => {
      return responce.json();
    })
    .then(data => {
       console.log("DATA.......")
      dispatch({
        type: DATA_REQUEST,
        data: data,
      });
    });
};

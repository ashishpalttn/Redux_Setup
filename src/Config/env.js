const apiURL = 'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-';

const baseURL = 'security/login';
const productURL = 'product-scan/';

export const apiConfig = {
  authenticationApi: {loginUserHandle: apiURL + baseURL},

  storeApi: {
    conceptData: `${apiURL}${productURL}concepts?`,
    listData: `${apiURL}${productURL}stores`,
    searchData: `${apiURL}${productURL}searchResults/`,
  },
};

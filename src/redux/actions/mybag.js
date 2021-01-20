import http from '../../helpers/http';
import qs from 'qs';

export default {
  getMyBag: (token) => ({
    type: 'GET_MY_BAG',
    payload: http(token).get('/customer/cart'),
  }),
  postToBag: (token, data) => ({
    type: 'POST_MY_BAG',
    payload: http(token).post('/customer/cart', qs.stringify(data)),
  }),
  editQty: (token,id, data) => ({
    type: 'PUT_MY_BAG',
    payload: http(token).put('/customer/cart/'+ id, qs.stringify(data)),
  }),
  checkout: (token) => ({
    type: 'POST_CHECKOUT',
    payload: http(token).post('/customer/checkout'),
  }),
  clear: () => ({
      type: 'CLEAR',
  }),
  reset: () => ({
    type: 'RESET',
}),
  
  
};

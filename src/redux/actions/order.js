import http from '../../helpers/http';

export default {
  getOrder: (token) => ({
    type: 'GET_ORDER',
    payload: http(token).get('customer/order'),
  }),
  getDetailOrder: (token,id) => ({
    type: 'GET_DETAIL_ORDER',
    payload: http(token).get('customer/order/'+id),
  }),
};

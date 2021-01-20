import http from '../../helpers/http';
import qs from 'qs';

export default {
  getAddress: (token) => ({
    type: 'GET_ADDRESS',
    payload: http(token).get('customer/address'),
  }),
  addAddress: (token, data) => ({
    type: 'ADD_ADDRESS',
    payload: http(token).post('customer/address', qs.stringify(data)),
  }),
  getDetail: (token, id) => ({
    type: 'GET_DETAIL_ADDRESS',
    payload: http(token).get(`customer/address/${id}`),
  }),
  updateAddress: (token, id, data) => ({
    type: 'UPDATE_ADDRESS',
    payload: http(token).patch(`customer/address/${id}`, data),
  }),
};

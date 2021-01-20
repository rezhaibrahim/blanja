import http from '../../helpers/http';
import qs from 'qs';

export default {
  getCategory: () => ({
    type: 'GET_CATEGORY',
    payload: http().get('category'),
  }),
  getDetailCategory: (id) => ({
    type: 'GET_DETAIL_CATEGORY',
    payload: http().get(`category/${id}`),
  }),
  clear: () => ({
    type: 'CLEAR',
  }),
};

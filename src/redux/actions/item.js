import http from '../../helpers/http';
import qs from 'qs';

export default {
  getNewItem: () => ({
    type: 'GET_NEW_ITEM',
    payload: http().get('items/new'),
  }),
  getPopularItem: () => ({
    type: 'GET_POPULAR_ITEM',
    payload: http().get('items/popular'),
  }),
  getDetailItem: (id) => ({
    type: 'GET_DETAIL_ITEM',
    payload: http().get(`items/${id}`),
  }),
};

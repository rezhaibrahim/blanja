import http from '../../helpers/http';
import qs from 'qs';

export default {
  login: (data) => ({
    type: 'LOGIN',
    payload: http().post('auth/login/customer', qs.stringify(data)),
  }),
  signup: (data) => ({
    type: 'SIGNUP',
    payload: http().post('auth/register/customer', qs.stringify(data)),
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
};

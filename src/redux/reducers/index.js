import {combineReducers} from 'redux';

import auth from './auth';
import user from './user';
import order from './order';
import address from './address';
import item from './item';
import category from './category';
import mybag from './mybag';

export default combineReducers({
  auth,
  user,
  order,
  address,
  item,
  category,
  mybag,
});

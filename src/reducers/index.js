import { combineReducers } from 'redux';
import members from './memberReducer';
import classes from './classReducer';
import badges from './badgeReducer';
import styles from './styleReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  members,
  classes,
  badges,
  styles,
  ajaxCallsInProgress
});

export default rootReducer;

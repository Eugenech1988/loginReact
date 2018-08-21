import { combineReducers } from 'redux';
import loading from './loaderReducer';
import {reducer as formReducer} from 'redux-form';
import login from './loginReducer';

export default combineReducers({
  loading,
  login,
  form: formReducer
});

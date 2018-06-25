import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import appReducer from './appReducer';

export default combineReducers({
  categoryReducer,
  postReducer,
  commentReducer,
  appReducer,
});

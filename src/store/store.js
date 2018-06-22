import { createStore, applyMiddleware } from 'redux';
import combinedReducer from '../reducers/combinedReducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as ReadableAPI from '../utils/ReadableAPI';

export default createStore(
  combinedReducer,
  composeWithDevTools(
    applyMiddleware(logger, thunk.withExtraArgument(ReadableAPI))
  )
)

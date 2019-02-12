import reducer from './reducers/peopleReducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';

const logger = store => next => action => {
  if (typeof action !== "function") {
    console.log(`dispatching : ${action.type} with ${JSON.stringify(action.payload || {})}`);
  }
  return next(action);
};

const middewares = [logger, thunk];

export default createStore(
  reducer , 
  composeWithDevTools(applyMiddleware(...middewares))
);
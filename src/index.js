import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const defaultFeedback = {
  feeling: '',
  understanding: '',
  support: '',
  comments: '',
};
function feedbackReducer(state = defaultFeedback, action) {
  if (action.type === 'ADD_FEELING') {
    return {
      ...state,
      feeling: action.payload,
    }
  } else if (action.type === 'ADD_UNDERSTANDING') {
    return {
      ...state,
      understanding: action.payload,
    }
  } else if (action.type === 'ADD_SUPPORT') {
    return {
      ...state,
      support: action.payload,
    }
  } else if (action.type === 'ADD_COMMENTS') {
    return {
      ...state,
      comments: action.payload,
    }
  } else if (action.type === 'CLEAR_FEEDBACK') {
    return defaultFeedback;
  }

  return state;
}

// TODO - need to setup redux
const storeInstance = createStore(
  // 1st arg is my reducers
  combineReducers({
    feedbackReducer,
  }),
  // 2nd arg is my middleware
  applyMiddleware(logger),
)

ReactDOM.render(
  <Provider store={storeInstance}><App /></Provider>,
  document.getElementById('root')
);
registerServiceWorker();

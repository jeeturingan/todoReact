import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Axios from 'axios';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducers/todoList';

Axios.defaults.headers.post['Content-Type'] = 'application/json';

Axios.interceptors.request.use(request => {
    return request;
}, error => {
    return Promise.reject(error);
});

Axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});

const composeEnhancers = process.env.NODE_ENV === 'development' 
                  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
                  : null || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reportWebVitals from './reportWebVitals';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';
import {BrowserRouter as Router} from "react-router-dom";

const createStoreWithMiddleware=applyMiddleware(promiseMiddleware)(createStore)


ReactDOM.render(
  <React.StrictMode>
  <Router>
  <Provider store={createStoreWithMiddleware(reducers)}>
  <App/>
  </Provider>,
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

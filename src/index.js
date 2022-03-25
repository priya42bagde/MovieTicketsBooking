import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from 'store';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './containers/client/redux/reducer/rootReducer.js'
//const Store = createStore(rootReducer)
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



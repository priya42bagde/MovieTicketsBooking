import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
//import store from 'store';
import { Provider } from 'react-redux';
import store from "../src/store/index"

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



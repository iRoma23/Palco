import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'
import AppPrueba from './AppPrueba';

import { BrowserRouter } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import store from './store' 

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppPrueba />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

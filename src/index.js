import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './Store';
import Dashboard from './components/Dashboard/Dashboard';

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>
  ,document.getElementById('root')
);

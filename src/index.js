require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import {App} from './App';
import './App.scss';
import {Provider} from 'react-redux';
import ReactDom from 'react-dom';
import { store } from './helpers';
import { configureFakeBackend } from './helpers';

configureFakeBackend();
ReactDom.render (
     <Provider store={store}>
     <App />
     </Provider>,
      document.getElementById('app')
      );
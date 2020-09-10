import React from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './assets/scss/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
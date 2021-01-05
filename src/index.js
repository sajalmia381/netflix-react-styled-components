import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'normalize.css'
import GlobalStyle from './global-styles'

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);

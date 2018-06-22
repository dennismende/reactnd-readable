import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import store from './store/store';
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter><App /></BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

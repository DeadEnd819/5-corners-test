import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './services/api';
import rootReducer from './store/reducers/root-reducer';
import App from './components/app/app';
import './assets/scss/style.scss';
import {fetchData} from './store/api-actions';

const api = createAPI();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));


Promise.all([
  store.dispatch(fetchData()),
])
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root'));
  });



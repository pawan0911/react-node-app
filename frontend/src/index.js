import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer';

const persistConfig = {
 key: 'root',
 storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
store.__persistor = persistStore(store);

ReactDOM.render(
 <Provider store={store}>
  <BrowserRouter>
   <App />
  </BrowserRouter>
 </Provider>,
 document.getElementById('root')
);

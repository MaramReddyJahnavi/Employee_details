import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)


  let myMiddleware = applyMiddleware();
  myMiddleware = applyMiddleware(thunk);
  let store =  createStore(persistedReducer,myMiddleware);

  export const persistor = persistStore(store)

ReactDOM.render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App/>
    </PersistGate>
</Provider>,
document.getElementById('root')
)
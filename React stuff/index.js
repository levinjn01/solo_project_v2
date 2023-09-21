import React from 'react';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

const root = createRoot(document.getElementById('contents'));
root.render( 
  // wrap the App in the Provider Component and pass in the store
  <Provider store={store}>
    <App/>
  </Provider>
);

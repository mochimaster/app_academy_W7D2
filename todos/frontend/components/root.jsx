import {Provider} from 'react-redux';
import React from 'react';
import App from './app';

// {store} same as props.store without the curly
const Root = ({ store }) => (
  <Provider store = { store }>
    <App />
  </Provider>
);

export default Root;

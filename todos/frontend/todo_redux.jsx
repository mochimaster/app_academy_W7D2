import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import App from './components/app';
import Root from './components/root';
import {fetchTodos} from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  const store = configureStore();
  window.fetchTodos = fetchTodos;

  window.store = store;
  ReactDOM.render(
    <Root store = {store} />,
      root
  );
});

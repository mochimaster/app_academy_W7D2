import React from 'react';
import {allTodos} from '../reducers/selectors';

import TodoListContainer from './todos/todo_list_container';

export default () => (
  <div>
    <h1>App</h1>
    <TodoListContainer />

  </div>
);

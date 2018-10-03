import * as APIUtil from '../util/todo_api_util';


export const receiveTodos = (todos) => ({

  type: RECEIVE_TODOS,
  todos

});

export const receiveTodo = (todo) => ({

  type: RECEIVE_TODO,
  todo

});

// fetchTodos()(store.dispatch)
export const fetchTodos = () => {
  return dispatch => {
  return APIUtil.fetchTodos()
          .then(res => dispatch(receiveTodos(res)));
  };
};

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

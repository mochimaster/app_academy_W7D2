import React from 'react';
import TodoList from './todo_list';
import {connect} from 'react-redux';
import {allTodos} from '../../reducers/selectors';
import {fetchTodos} from '../../actions/todo_actions';

// creates a reader
// Why is it different than state.todo ?? - single todo?
// we want an array of Todos.
const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

// what function to use to change state
const mapDispatchToProps = (dispatch) => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps,
  mapDispatchToProps)
  (TodoList);

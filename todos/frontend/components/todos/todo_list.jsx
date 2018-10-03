import React from 'react';
import TodoListItem from './todo_list_item';

import TodoForm from './todo_form';

class TodoList extends React.Component {


  render() {
    // debugger;
    return (
      <div>
        <h2>To Do List</h2>
        <ul>
          {this.props.todos.map(todo => {
            return (
              <TodoListItem key={todo.id} todo={
                  {
                  title: todo.title,
                  body: todo.body
                }
              }/>);
          })}
        </ul>

        <TodoForm receiveTodo = {this.props.receiveTodo}
          />
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchTodos();
  }
}

export default TodoList;

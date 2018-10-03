export const fetchTodos = () => {
  return $.ajax({
  url: './api/todos',
  method: 'GET'
  });
};


// export const fetchTodos = function() {
//   return $.ajax(
//     //make ajax request
//   );
// };

// in another file

// import {fetchTodos} from 'todo_api_util';

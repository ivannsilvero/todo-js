import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHtml(todo));

todoList.todos.forEach(crearTodoHtml);

// const newodo = new Todo('Aprender JavaScript')
// todoList.nuevoTodo(newodo)

console.log(todoList.todos);
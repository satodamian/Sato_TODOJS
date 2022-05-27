import './styles.css';
import {Todo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

// import {Todo} from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript!!!'); //Clase

// todoList.nuevoTodo(tarea);
// // tarea.completado = true;


// console.log(todoList);

// crearTodoHtml(tarea);

// LOCALSTORAGE
// localStorage.setItem('mi-key','ABC1234');
// sessionStorage.setItem('mi-key','ABC1234');
// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);

todoList.todos.forEach(todo => crearTodoHtml(todo));





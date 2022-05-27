import { Todo } from "../classes";
import { todoList } from '../index.js';

// Referencias al HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');

export const crearTodoHtml = (todo) =>{
    const HtmlTodo = `<li class="${(todo.completado)? 'completed':''}" data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado)? 'checked':''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = HtmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}

// EVENTOS
txtInput.addEventListener('keyup', (event)=>{ //evento de prototipo de consola de los click keyup
   if (event.keyCode === 13 && txtInput.value.length>0) {
       console.log(txtInput.value);
       const nuevoTodo = new Todo(txtInput.value);
       todoList.nuevoTodo(nuevoTodo);

       crearTodoHtml(nuevoTodo);

       txtInput.value = '';
   }
}); /* Cuando suleto la tecla ocurrira dicha accion */

divTodoList.addEventListener('click', (event)=>{
    console.log('click');
    // console.log(event.target.localName); //Referencia de valor al momento de tocar una estructura del div
    const nombreElemento = event.target.localName; //input, label, button
    const todoElemento   = event.target.parentElement.parentElement; //Referencia al id div, referencia a html
    const todoId         = todoElemento.getAttribute('data-id');

   

        // console.log(todoElemento);
        // console.log(todoId);
        // console.log(nombreElemento);

    if (nombreElemento.includes('input')) { //Click en el check
       todoList.marcarCompletado(todoId); //llamo al metodo de todolist, 
       todoElemento.classList.toggle('completed'); //referecnia a todas las clases, agregando o cambiando clase (toggle) y pongo el estado

    } else if (nombreElemento.includes('button')){

        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }

    // console.log(todoList);
});

btnBorrar.addEventListener('click', ()=>{
    todoList.eliminarCompletados();

    for (let i = divTodoList.children.length-1; i>=0; i--) {
        const elemento = divTodoList.children[i];
       if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
       }
        
    }
})


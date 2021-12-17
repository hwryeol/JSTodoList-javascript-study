const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = [];

function deleteToDo(event){
    const li = event.target.parentElement;
    
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo()
}

function saveToDo(event){
    localStorage.setItem("todos",JSON.stringify(toDos));
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span);
    li.appendChild(button)
    span.innerText = newTodo.text;
    button.innerText = "X";

    toDoList.appendChild(li);
    button.addEventListener('click',deleteToDo)
    toDos.push(newTodo)
    saveToDo()
}

function handleToDoSubmit(event){    
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""
    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    }
    paintToDo(newTodoObj)
}
toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parserdToDos = JSON.parse(savedToDos);
    parserdToDos.forEach(paintToDo)
}
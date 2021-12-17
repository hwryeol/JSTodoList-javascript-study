
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")


const USERNAME_KEY = "usename"
const HIDDEN_CLASSNAME = "hidden";

function showGreeting(username){
    greeting.innerText = (`Hello ${username}`)
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    showGreeting(username)
    localStorage.setItem(USERNAME_KEY,username)
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    showGreeting(savedUsername)
}


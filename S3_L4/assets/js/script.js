
/* function for button click handling */
const clickHandling = function() {

    /* check if no task in input field*/
    if(document.querySelector('#newTask input').value.length === 0) {
        alert('Insert a new task!')
    } else {

        /* method to create a new task */
        createTask();
    }
}

const createTask = function() {

    let input = document.querySelector('#newTask input');
    let tasks = document.querySelector('#tasks');

    /* newTask item definition */
    let newTask =
        `<div class="task">
            <span id="taskname">${input.value}</span><button class="delete"><i class="far fa-trash-alt"></i></button>
        </div>`
    
    /* newTsk item position into DOM */
    tasks.innerHTML += newTask;

    /* input.value at blank after click */
    input.value = '';
}

/* addEventListener on button click at window.onload */
window.onload = function() {
    let createTaskBtn = document.querySelector('#createTaskBtn');
    createTaskBtn.addEventListener('click', clickHandling)
}
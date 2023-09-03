
/* function for button click handling */
const clickHandling = function() {

    /* check if no task in input field*/
    if(document.querySelector('#newTask input').value.length === 0) {
        alert('Insert a new task!')
    } else {
        createTask();
    }
}

const createTask = function() {

    let tasks = document.querySelector('#tasks');
    
}

/* addEventListener on button click at window.onload */
window.onload = function() {
    let createTaskBtn = document.querySelector('#createTaskBtn');
    createTaskBtn.addEventListener('click', clickHandling)
}
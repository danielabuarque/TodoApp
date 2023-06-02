const getTasksList = () => {
    let tasksList = [];

    //Getting the Tasks List Array
    let tasks_str = localStorage.getItem('tasks-list');

    if(tasks_str !== null) {
        tasksList = JSON.parse(tasks_str);
    }

    return tasksList;
}

const addTask = () => {
    let newTask = document.getElementById('input-task').value;
    let tasksList = getTasksList();
    tasksList.push(newTask);
    localStorage.setItem('tasks-list',JSON.stringify(tasksList));

    show();

    document.getElementById('input-task').value = "";
    return;
}

const remove = (e) => {

    let id = e.target.id;
    debugger;
    let tasksList = getTasksList();
    tasksList.splice(id,1);
    localStorage.setItem('tasks-list', JSON.stringify(tasksList));

    show();
    return;
}

const show = () => {
    tasksList = getTasksList();
    let html= '<ul>';

    for(let i = 0; i < tasksList.length; i++) {
        html += '<li>' + tasksList[i] + '<button class="remove" id="' + i + '">Delete</button></li>';
    }
    html += '</ul>';

    document.getElementById('tasks-list').innerHTML = html;

    let buttons = document.getElementsByClassName('remove');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }

}

document.getElementById('add-button').addEventListener('click', addTask);
show();
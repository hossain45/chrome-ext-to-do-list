
let taskText = document.getElementById("taskText");
let form = document.getElementById("form");
let addTaskBtn = document.getElementById("addTaskBtn");
let toDoTasks = document.getElementById("toDoTasks");
let completedTasksContainer = document.getElementById("completedTasks");

// createTask function
function createTask (task) {
    // creating elements for to do tasks
    let listItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");
    // adding values
    label.innerText = task;
    checkBox.type = "checkbox";
    // appneding values
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}
// addTask function
function addTask (event) {
    event.preventDefault();
    let listItem = createTask(taskText.value);
    toDoTasks.appendChild(listItem);
    taskText.value = '';
    //bind the new list item to toDoTasks
    bindToDoTasks (listItem, completeTask);
}
//bind the new list item to toDoTasks
function bindToDoTasks (taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}
// moving tasks to completedTasksContainer
function completeTask() {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completedTasksContainer.appendChild(listItem);
    //bind the new list item to bindCompleteTask
    bindCompleteTask(listItem, deleteTask);
}
//bind the new list item to bindCompleteTask
function bindCompleteTask (taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}
// delete task function
function deleteTask () {
    let listItem = this.parentNode;
    let completedTasksContainer = listItem.parentNode;
    completedTasksContainer.removeChild(listItem);
}

form.addEventListener('submit', addTask);
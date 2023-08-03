
let taskText = document.getElementById("taskText");
let form = document.getElementById("form");
let addTaskBtn = document.getElementById("addTaskBtn");
let toDoTasks = document.getElementById("toDoTasks");
let completedTasksContainer = document.getElementById("completedTasks");
let time = document.getElementById("time");
let greeting = document.getElementById("greeting");
     
function updateTime() {
    let timeObj = new Date();
    let hours = timeObj.getHours();
    let minutes = timeObj.getMinutes();
    let seconds = timeObj.getSeconds();

    let currentTime = hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    time.innerHTML = currentTime + ' ' + (hours < 12 ? 'AM' : 'PM');

    let greeting = "";
    if (hours >= 5 && hours < 12) {
      greeting = "Good Morning";
    } else if (hours >= 12 && hours < 18) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }
    document.getElementById('greeting').innerHTML = greeting;
  }
  setInterval(updateTime, 1000);

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
    label.contentEditable = "true";

    listItem.classList.add('flex', 'justify-left', 'items-center', 'gap-5');

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
    // adding dlt btn as icon to parent element 
    let icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-trash', 'text-red-500');
    deleteBtn.appendChild(icon);
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);
    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completedTasksContainer.appendChild(listItem);
    listItem.classList.add('flex', 'justify-between', 'items-center');
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


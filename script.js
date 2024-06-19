document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to filter buttons
    document.getElementById("all-tasks").addEventListener("click", showAllTasks);
    document.getElementById("complete-tasks").addEventListener("click", showCompletedTasks);
    document.getElementById("incomplete-tasks").addEventListener("click", showIncompleteTasks);
});

function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    var todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    var label = document.createElement("label");
    label.textContent = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        todoItem.remove();
        updateTaskDisplay(); 
    };

    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);
    todoItem.appendChild(deleteButton);

    var todoList = document.getElementById("todo-list");
    todoList.appendChild(todoItem); 
    var buttonContainer = document.querySelector(".button-container");
    buttonContainer.parentNode.insertBefore(todoItem, buttonContainer.nextSibling);

    taskInput.value = "";
    updateTaskDisplay();
}


function updateTaskDisplay() {
    var todoList = document.getElementById("todo-list");
    var todoItems = todoList.querySelectorAll(".todo-item");

    todoItems.forEach(function(item) {
        var checkbox = item.querySelector("input[type='checkbox']");
        var label = item.querySelector("label");

        if (checkbox.checked) {
           
            document.getElementById("complete-tasks").appendChild(item);
        } else {
           
            document.getElementById("incomplete-tasks").appendChild(item);
        }
    });
}

function showAllTasks() {
    var todoItems = document.querySelectorAll(".todo-item");
    todoItems.forEach(function(item) {
        item.style.display = "block";
    });
}

function showCompletedTasks() {
    var todoItems = document.querySelectorAll(".todo-item");
    todoItems.forEach(function(item) {
        if (item.querySelector("input[type='checkbox']").checked) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function showIncompleteTasks() {
    var todoItems = document.querySelectorAll(".todo-item");
    todoItems.forEach(function(item) {
        if (!item.querySelector("input[type='checkbox']").checked) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

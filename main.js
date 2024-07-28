let addTaskButton = document.getElementById("add-task-button");
let taskList = document.querySelector(".task-list");
let taskInput = document.getElementById("task-input");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function loadTasks() {
  taskList.innerHTML = "";
  tasks.forEach((value, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("task");
    listItem.innerHTML = `
      <h1>${value.Name}</h1>
      <button onclick="removeTask(${index})"><i class="fa-solid fa-rectangle-xmark"></i></button>
    `;
    taskList.appendChild(listItem);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const taskName = taskInput.value;
  if (taskName !== "") {
    tasks.push({ Name: taskName });
    taskInput.value = "";
    saveTasks();
    loadTasks();
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  loadTasks();
}

addTaskButton.addEventListener("click", addTask);

loadTasks();

// load tasks when page opens
window.onload = function(){
loadTasks();
}

function addTask(){

let input = document.getElementById("taskInput");
let task = input.value;

if(task === ""){
alert("Please enter a task");
return;
}

createTaskElement(task);

saveTask(task);

input.value = "";

}

function createTaskElement(task){

let li = document.createElement("li");
li.textContent = task;

// mark completed
li.onclick = function(){
li.style.textDecoration = "line-through";
};

// delete button
let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.style.marginLeft = "10px";

deleteBtn.onclick = function(){
li.remove();
removeTask(task);
};

li.appendChild(deleteBtn);

document.getElementById("taskList").appendChild(li);

}

function saveTask(task){

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.push(task);

localStorage.setItem("tasks", JSON.stringify(tasks));

}

function loadTasks(){

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(task => {
createTaskElement(task);
});

}

function removeTask(task){

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks = tasks.filter(t => t !== task);

localStorage.setItem("tasks", JSON.stringify(tasks));

}

let time = 1500;
let timer;

function startTimer(){

if(timer){
return;
}

timer = setInterval(function(){

let minutes = Math.floor(time / 60);
let seconds = time % 60;

document.getElementById("time").textContent =
minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

time--;

if(time < 0){

clearInterval(timer);
timer = null;

alert("Time's up! Take a break.");

time = 1500;

}

},1000);

}

function toggleDarkMode(){
document.body.classList.toggle("dark-mode");
}
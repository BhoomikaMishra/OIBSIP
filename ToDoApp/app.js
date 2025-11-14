const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

let tasks = [];

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const task = { id: Date.now(), text: taskText, completed: false };
  tasks.push(task);
  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  pendingTasks.innerHTML = "";
  completedTasks.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;

    const btnContainer = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.classList.add("edit");
    editBtn.onclick = () => editTask(task.id);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = () => deleteTask(task.id);

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    if (!task.completed) {
      const completeBtn = document.createElement("button");
      completeBtn.textContent = "✅";
      completeBtn.classList.add("complete");
      completeBtn.onclick = () => completeTask(task.id);
      btnContainer.appendChild(completeBtn);
      li.appendChild(btnContainer);
      pendingTasks.appendChild(li);
    } else {
      li.classList.add("completed");
      li.appendChild(btnContainer);
      completedTasks.appendChild(li);
    }
  });
}

function completeTask(id) {
  tasks = tasks.map(task => 
    task.id === id ? { ...task, completed: true } : task
  );
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function editTask(id) {
  const newText = prompt("Edit your task:");
  if (newText !== null && newText.trim() !== "") {
    tasks = tasks.map(task =>task.id === id ? { ...task, text: newText.trim() } : task);
    renderTasks();
  }
}
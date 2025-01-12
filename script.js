// Ensure the script runs only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage when the page loads
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // Do not save again while loading
  }

  // Save tasks to Local Storage
  function saveTasks() {
    const tasks = Array.from(taskList.children).map(item => item.firstChild.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Add a new task to the list
  function addTask(taskText, save = true) {
    // Check if the input is empty
    if (!taskText) {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item and add a class for styling
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    listItem.classList.add('task-item');

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    // Add click event to remove the task
    removeButton.onclick = () => {
      taskList.removeChild(listItem);
      saveTasks(); // Update Local Storage after removal
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Add the new task to the task list
    taskList.appendChild(listItem);

    // Save to Local Storage if the save flag is true
    if (save) {
      saveTasks();
    }
  }

  // Event listener for the Add Task button
  addButton.addEventListener('click', () => {
    addTask(taskInput.value.trim());
    taskInput.value = ''; // Clear input field
  });

  // Event listener for pressing "Enter" in the input field
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask(taskInput.value.trim());
      taskInput.value = ''; // Clear input field
    }
  });

  // Load tasks from Local Storage on page load
  loadTasks();
});

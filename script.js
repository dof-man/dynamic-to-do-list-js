// Ensure the script runs only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    // Retrieve and trim the task input value
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add = 'remove-btn';

    // Add click event to remove the task
    removeButton.onclick = () => {
      taskList.removeChild(listItem);
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Add the new task to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
  }

  // Event listener for the Add Task button
  addButton.addEventListener('click', addTask);

  // Event listener for pressing "Enter" in the input field
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});

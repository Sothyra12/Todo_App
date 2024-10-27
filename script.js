/* script.js */

const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

// store all task data like title, date, description
const taskData = [];

// track the state when editing & discarding tasks
let currentTask = {};

// add the input values to the taskData array
const addOrUpdateTask = () => {
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  }

  updateTaskContainer();
  reset();
};

// add the tasks to the DOM
const updateTaskContainer = () => {
  tasksContainer.innerHTML = "";

  taskData.forEach(
    ({ id, title, date, description }) => {
        tasksContainer.innerHTML += `
        <div class="task" id="${id}">
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button onclick="editTask(this)" type="button" class="btn">Edit</button>
          <button onclick="deleteTask(this)" type="button" class="btn">Delete</button>
        </div>
      `
    }
  );
};

const deleteTask = (buttonEl) => {
  // find the index of the task to delete
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  buttonEl.parentElement.remove();
  // use splice to remove the task from the taskData array as the first argument is the index of the item to remove and the second argument is the number of items to remove
  taskData.splice(dataArrIndex, 1);
}

const editTask = (buttonEl) => {

}

// reset the form inputs after adding a task
const reset = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {};
};

// open and close the form modal using classList.toggle instead of classlist.add/.remove
openTaskFormBtn.addEventListener("click", () =>
  taskForm.classList.toggle("hidden")
);

closeTaskFormBtn.addEventListener("click", () => {
  confirmCloseDialog.showModal();
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the browser from refreshing the page after form submission

  addOrUpdateTask();
});

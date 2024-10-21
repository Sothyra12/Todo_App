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

// open and close the form modal using classList.toggle instead of classlist.add/.remove
openTaskFormBtn.addEventListener("click", () => taskForm.classList.toggle("hidden"));

closeTaskFormBtn.addEventListener("click", () => {confirmCloseDialog.showModal();});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  taskForm.classList.toggle("hidden");
});

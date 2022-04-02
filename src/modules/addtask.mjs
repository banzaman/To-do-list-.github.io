import remove from './remove.mjs';
import editTask from './editDesc.mjs';
import toLS from './saveLocalStorage.mjs';
import checkBox from './checkbox.mjs';


const addDiv = document.getElementById('add');
const input = document.getElementById('addTask');

// CreateTask
const newTask = (name, index) => {
  const task = {

    name,
    completed: false,
    index,
  };
  return task;
};

// Add to the list
const addToLi = (name, index, trashImg, taskList, todoList) => {
  const element = document.createElement('li');
  element.classList = 'task';

  element.innerHTML = `<input type="checkbox" name="${index}"><label for="${index}">${name}</label><div class="remove"><img src=${trashImg} alt="remove"/>`;
  todoList.appendChild(element);
  remove(element, index, taskList, todoList);
  editTask(element, taskList);
  checkBox(element, index, taskList);
};

// Add task to the list and display
const listen = (taskList, trashImg, todoList) => {
  addDiv.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
      addToLi(input.value, taskList.length, trashImg, taskList, todoList);
      taskList.push(newTask(input.value, taskList.length));

      input.value = '';
      toLS(taskList);
    }
  });
};

export default listen;

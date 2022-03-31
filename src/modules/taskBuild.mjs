import remove from './remove.mjs';
import editTask from './editDesc.mjs';

// Create Li element
const newLi = (name, index, completed, trashImg, taskList, todoList) => {
  const element = document.createElement('li');
  element.classList = 'task';
  if (completed) {
    element.innerHTML = `<input type="checkbox" name="${index}" checked><label for="${index}">${name}</label><div class="remove"><img src=${trashImg} alt="remove"/>`;
    remove(element, index, taskList, todoList);
    editTask(element, taskList);
    return element;
  }
  element.innerHTML = `<input type="checkbox" name="${index}"><label for="${index}">${name}</label><div class="remove"><img src=${trashImg} alt="remove"/>`;
  remove(element, index, taskList, todoList);
  editTask(element, taskList);
  return element;
};

export default newLi;

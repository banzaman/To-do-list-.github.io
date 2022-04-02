import toLS from './saveLocalStorage.mjs';

// remove
const remove = (item, index, taskList, todoList) => {
  const removeIco = item.querySelector('.remove');
  removeIco.addEventListener('click', () => {
    const newList = taskList;
    newList.splice(index, 1);
    taskList = newList;
    taskList.forEach((item, i) => {
      item.index = i;
    });

    toLS(taskList);
    todoList.removeChild(item);
  });
};

export default remove;

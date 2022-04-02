import toLS from './saveLocalStorage.mjs';

const clear = (element, taskList, todoList) => {
  element.addEventListener('click', () => {
    const newLi = taskList.filter((task) => task.completed === false);
    taskList = newLi;

    taskList.forEach((item, i) => {
      item.index = i;
    });

    toLS(taskList);

    const list = todoList.querySelectorAll('li');
    list.forEach((item) => {
      if (item.querySelector('input').checked) {
        todoList.removeChild(item);
      }
    });
  });
};

export default clear;

import toLS from './saveLocalStorage.mjs';

const checkBox = (element, index, taskList) => {
  const box = element.querySelector('input');
  box.addEventListener('change', () => {
    if (box.checked) {
      taskList[index].completed = true;
      toLS(taskList);
    } else {
      taskList[index].completed = false;
      toLS(taskList);
    }
  });
};

export default checkBox;

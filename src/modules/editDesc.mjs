import toLS from './saveLocalStorage.mjs';

// Edit description
const editTask = (element, taskList) => {
  const label = element.querySelector('label');
  const index = element.querySelector('input').name;
  let description = label.innerHTML;

  label.addEventListener('click', () => {
    label.contentEditable = true;
    label.focus();
  });

  label.addEventListener('focusout', () => {
    description = label.innerHTML;
    taskList[index].name = description;
    label.contentEditable = false;
    toLS(taskList);
  });
  label.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      description = label.innerHTML;
      taskList[index].name = description;
      label.contentEditable = false;
      toLS(taskList);
    }
  });
};

export default editTask;

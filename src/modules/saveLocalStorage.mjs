// Save localStorage
const toLS = (taskList) => {
  localStorage.setItem('taskList', JSON.stringify(taskList));
};

export default toLS;

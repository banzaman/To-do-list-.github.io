class List {
  constructor() {
    this.list = [];
  }
}

const task = new List();

// Load from Local Storage
if (localStorage.taskList) {
  const from = JSON.parse(localStorage.taskList);
  task.list = from;
}

export default task;

// import _ from 'lodash';
import './style.css';
import enterImg from './img/enter.png';
import trashImg from './img/trash.png';
import task from './modules/taskList.mjs';
import listen from './modules/addtask.mjs';
import newLi from './modules/taskBuild.mjs';
import clear from './modules/clearComp.mjs';

const todoList = document.getElementById('todoList');

// Enter Button
const addBtn = document.getElementById('enter');
const enter = new Image();
enter.src = enterImg;
enter.style.width = '100%';
addBtn.appendChild(enter);

// Display list
task.list.forEach((item) => {
  todoList.appendChild(
    newLi(item.name, item.index, item.compleated, trashImg, task.list, todoList),
  );
});

// Add task
listen(task.list, trashImg, todoList);

// Clear Completed
const clearBtn = document.getElementById('clear');

clear(clearBtn, task.list, todoList);

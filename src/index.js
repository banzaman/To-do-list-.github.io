import _ from 'lodash';
import './style.css';

const todoList = document.getElementById('todoList');

const list = [
  {
    name: 'laundry',
    compleated: false,
    index: 0,
  },
  {
    name: 'litter',
    compleated: true,
    index: 1,
  },
  {
    name: 'dishes',
    compleated: false,
    index: 2,
  },
];

const newLi = (name, index, compleated) => {
  const element = document.createElement('li');
  if (compleated) {
    element.innerHTML = `<input type="checkbox" name="${index}" checked><label for="${index}">${name}</label>`;
    return element;
  }
  element.innerHTML = `<input type="checkbox" name="${index}"><label for="${index}">${name}</label>`;
  return element;
};

list.forEach((item) => {
  t
odoList.appendChild(newLi(item.name, item.index, item.compleated));
});
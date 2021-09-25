import './style/styles.css';
import checkItem from './checkItem.js';

const data = document.querySelector('.data');
const todoList = [{
  description: 'wash the dishes',
  completed: false,
  id: 1,
},
{
  description: 'complete the dishes',
  completed: false,
  id: 2,
},
{
  description: 'complete To Do list project',
  completed: false,
  id: 3,
},
];

if (!localStorage.getItem('todo')) {
  localStorage.setItem('todo', JSON.stringify(todoList));
}
const todos = JSON.parse(localStorage.getItem('todo') || '[]');
todos.forEach(({ description, id, completed }) => {
  const div = document.createElement('div');
  div.classList.add('d-height');
  div.classList.add('todo-cont');
  div.innerHTML = `<li><input type="checkbox" ${completed && 'checked'} class="check-box"   id="check-${id}">${description}</li>
    <div class="delete-icon"></div>`;
  data.appendChild(div);
});

for (let i = 0; i < todos.length; i += 1) {
  const inCheck = document.querySelector(`#check-${todos[i].id}`);
  inCheck.addEventListener('change', (e) => {
    checkItem(i, e, todos);
    localStorage.setItem('todo', JSON.stringify(todos));
  });
}
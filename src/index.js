import './style/styles.css';

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

todoList.forEach(({ description }) => {
  const div = document.createElement('div');
  div.classList.add('d-height');
  div.classList.add('todo-cont');
  div.innerHTML = `<li><input type="checkbox" class="check-box"   id="check">${description}</li>
    <div class="delete-icon"></div>`;
  data.appendChild(div);
});
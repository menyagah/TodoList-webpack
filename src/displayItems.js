
const displayTodos = () => {
  const data = document.querySelector('.data');
  data.innerHTML = '';
  const todos = JSON.parse(localStorage.getItem('todo') || '[]');
  todos.forEach(({ description, id, completed }) => {
    const div = document.createElement('div');
    div.classList.add('d-height');
    div.classList.add('todo-cont');
    div.innerHTML = `<li><input type="checkbox" ${completed && 'checked'} class="check-box"   id="check-${id}">${description}</li>
          <div class="delete-trash" id = "deleteBtn-${id}" >
          </div>`;
    data.appendChild(div);
  });
};

export default displayTodos;
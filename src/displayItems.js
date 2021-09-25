const data = document.querySelector('.data');

const displayTodos = () => {
  data.innerHTML = '';
  const todos = JSON.parse(localStorage.getItem('todo') || '[]');
  todos.forEach(({ description, id, completed }) => {
    const div = document.createElement('div');
    div.classList.add('d-height');
    div.classList.add('todo-cont');
    div.innerHTML = `<li><input type="checkbox" ${completed && 'checked'} class="check-box"   id="check-${id}">${description}</li>
          <button  id = "deleteBtn-${id}" > remove
          </button>`;
    data.appendChild(div);
  });
};

export default displayTodos;
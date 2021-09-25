import todo from './todoClass.js';

const input = document.querySelector('.input-field');
const addTodo = () => {
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (input.value === '') {
        // eslint-disable-next-line no-alert
        alert('You cannot add empty fields');
      } else {
        const todos = JSON.parse(localStorage.getItem('todo') || '[]');
        const id = Math.random().toString(36).substr(0, 5);
        todos.push({ description: input.value, completed: false, id });
        localStorage.setItem('todo', JSON.stringify(todos));
        todo.displayTodos();
        input.value = '';
      }
    }
  });
};

export default addTodo;
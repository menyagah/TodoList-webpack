import checkItem from './checkItem.js';
import todo from './todoClass.js';

const attachInputEventListeners = () => {
  const todos = JSON.parse(localStorage.getItem('todo') || '[]');
  for (let i = 0; i < todos.length; i += 1) {
    const inCheck = document.getElementById(`check-${todos[i].id}`);
    inCheck.addEventListener('input', (e) => {
      checkItem(i, e, todos);
      localStorage.setItem('todo', JSON.stringify(todos));
    });

    // const deleteBtn = document.getElementById(`deleteBtn-${todos[i].id}`);
    // deleteBtn.addEventListener('click', () => {
    //   localStorage.setItem('todo', JSON.stringify(todos.filter((todo) => todo.id !== todos[i].id)));
    //   todo.displayTodos();
    //   attachInputEventListeners();
    // });
  }
};

export default attachInputEventListeners;
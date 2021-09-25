const input = document.querySelector('.input-field');
// const inCheck = document.querySelector(`#check-${todos[i].id}`);
const data = document.querySelector('.data');

class Todo {
  constructor(input) {
    this.input = input;
    // this.inCheck = inCheck;
  }

  displayTodos() {
    this.input = input;
    data.innerHTML = '';
    localStorage.getItem('todo');
    const todos = JSON.parse(localStorage.getItem('todo') || '[]');
    todos.forEach(({ description, id, completed }) => {
      const div = document.createElement('div');
      div.classList.add('d-height');
      div.classList.add('todo-cont');
      div.innerHTML = `<li><input type="checkbox" ${completed && 'checked'} class="check-box"   id="check-${id}">${description}</li>
          <div class="delete-icon"></div>`;
      data.appendChild(div);
    });
  }

  // deleteBook(el) {
  //   const books = JSON.parse(localStorage.getItem('book'));
  //   localStorage.setItem('book', JSON.stringify(books));
  //   const { id } = el;
  //   localStorage.setItem('book', JSON.stringify(books.filter((book) => book.id !== id)));
  //   this.displayBooks();
  // }
}

const todo = new Todo(input);

// todo.displayTodos();

export default todo;
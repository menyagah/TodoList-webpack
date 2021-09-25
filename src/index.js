import './style/styles.css';
import addTodo from './eventListners.js';
import todo from './todoClass.js';
import attachInputEventListeners from './attachCheckListener.js';

todo.displayTodos();
addTodo();
attachInputEventListeners();

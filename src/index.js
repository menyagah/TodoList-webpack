import './style/styles.css';
import addTodo from './eventListners.js';
import displayTodos from './displayItems.js';
import attachInputEventListeners from './attachCheckListener.js';
import clearAllBtn from './clearAll.js';

displayTodos();
addTodo();
attachInputEventListeners();
clearAllBtn();

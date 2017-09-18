import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/todos/root';


import configureStore from './store/store';
import {
  receiveTodo,
  receiveTodos,
  removeTodo } from './actions/todos_actions';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;
  // window.test1 = test1;
  // window.test2 = test2;
  // window.test3 = test3;

  ReactDOM.render(<Root />, document.getElementById('content'))
})



///////////////////////////Test objects///////////////////////////////
// const test1 = {
//   id: 3,
//   title: 'Get groceries',
//   body: 'maybe later',
//   done: true
//   }
//
// const test2 = {
//     id: 2,
//     title: 'finish One Piece',
//     body: 'IM TRYING',
//     done: false
//   }
//
// const test3 = [
//   {
//     id: 2,
//     title: 'finish One Piece',
//     body: 'IM TRYING',
//     done: false
//   },
//   {
//     id: 3,
//     title: 'Get groceries',
//     body: 'maybe later',
//     done: true
//   }
// ]

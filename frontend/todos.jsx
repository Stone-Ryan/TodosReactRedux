import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';


import configureStore from './store/store';
import {
  receiveTodo,
  receiveTodos,
  removeTodo } from './actions/todos_actions';

import {
  receiveStep,
  receiveSteps,
  removeStep,
} from './actions/steps_actions';


const stepTest = {
  id: 3,
  title: 'run',
  done: false,
  todo_id: 1
};

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;

  ReactDOM.render(<Root store={store}/>, document.getElementById('content'))
})

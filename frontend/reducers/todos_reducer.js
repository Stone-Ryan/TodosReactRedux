import {
  RECEIVE_TODO,
  RECEIVE_TODOS,
  REMOVE_TODO, } from '../actions/todos_actions';
import merge from 'lodash/merge';

const defaultState = {
  1: {
  id: 1,
  title: 'Git Gud',
  body: 'at Ruby',
  done: true
  },

  2: {
    id: 2,
    title: 'Git Gudduer',
    body: 'At React',
    done: false
  },
}

const todos_reducer = (state = defaultState, action) => {
  Object.freeze(state);

  let nextState;

  switch( action.type ) {
    case RECEIVE_TODO:
      const newTodo = {[action.todo.id]: action.todo}
      return merge({}, state, newTodo);
    case RECEIVE_TODOS:
      nextState = {};
      action.todos.forEach(todo => nextState[todo.id] = todo);
      return nextState;
    case REMOVE_TODO:
      nextState = merge({}, state);
      delete nextState[action.todo.id];
      return nextState;
    default:
      return state;
  }
}

export default todos_reducer;

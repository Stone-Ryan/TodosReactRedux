import {
  RECEIVE_STEP,
  RECEIVE_STEPS,
  REMOVE_STEP, } from '../actions/steps_actions';
import merge from 'lodash/merge';

const defaultState = {
    1: {
      id: 1,
      title: 'walk to store',
      body: 'body1',
      done: false,
      todoId: 1
    },
    2: {
      id: 2,
      title: 'buy soap',
      body: 'body2',
      done: false,
      todoId: 1
    },
    3: {
      id: 3,
      title: 'title',
      body: 'body',
      done: true,
      todoId: 2
    },
    4: {
      id: 4,
      title: 'other title',
      body: 'other body',
      done: false,
      todoId: 2
    }
  };

const stepsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let newState;

  switch (action.type) {
    case RECEIVE_STEP:
      const newStep = {[action.step.id]: action.step};
      return merge({}, state, newStep);
    case RECEIVE_STEPS:
      newState = {};
      action.steps.forEach(step => newState[step.id] = step);
      return newState;
    case REMOVE_STEP:
      newState = merge({}, state);
      delete newState[action.step.id];
      return newState;
    default:
      return state;
  }
}

export default stepsReducer;

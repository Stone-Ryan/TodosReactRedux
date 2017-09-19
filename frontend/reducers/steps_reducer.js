import {
  RECEIVE_STEP,
  RECEIVE_STEPS,
  REMOVE_STEP, } from '../actions/steps_actions';
import merge from 'lodash/merge';

const defaultState = {
    1: {
      id: 1,
      title: 'walk to store',
      done: false,
      todo_id: 1
    },
    2: {
      id: 2,
      title: 'buy soap',
      done: false,
      todo_id: 1
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
      delete newState[step.id];
      return newState;
    default:
      return state;
  }
}

export default stepsReducer;

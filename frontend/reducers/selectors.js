export const allTodos = state => {
  return Object.keys(state.todos).map( id => state.todos[id]);
};

export const stepsByTodoId = ({steps}, todoId) => {
  const stepsByTodoId = [];

  Object.keys(steps).forEach( stepId => {
    const step = steps[stepId];
    if (step.todoId === todoId){
      stepsByTodoId.push(step);
    }
  });
  return stepsByTodoId;
};

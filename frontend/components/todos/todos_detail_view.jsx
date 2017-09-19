import React, { Component } from 'react';
import StepListContainer from '../steps/step_list_container';

class TodosDetailView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stepShow: false
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleSteps = this.toggleSteps.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const { todo, removeTodo } = this.props;
    let result = confirm('Are you sure you want to delete?');
    result ? removeTodo(todo) : null;
  }

  toggleSteps(e) {
    e.preventDefault();
    const { stepShow } = this.state;
    this.setState({ stepShow: !stepShow });
  }

  render() {
    const { todo, removeTodo } = this.props;
    const { body, id, done } = todo;
    const { stepShow } = this.state;

    const status = todo.done ? 'Completed' : 'Uncompleted';
    const stepButtonText = stepShow ? 'Hide' : 'Show';

    let showSteps;

    if (this.state.stepShow) {
      showSteps = <StepListContainer todoId={id}/>
    }

    return (
      <div>
        <p>Body: {body}</p>
        <p>Status: {status}</p>
        <button onClick={this.handleDelete}>Delete</button>
        <button onClick={this.toggleSteps}>{stepButtonText} Steps</button>
        {showSteps}
      </div>
    )
  }
}

export default TodosDetailView;

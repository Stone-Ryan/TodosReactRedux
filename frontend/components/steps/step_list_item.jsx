import React, {Component} from 'react';
import merge from 'lodash/merge';

class StepListItem extends Component {
  constructor(props){
    super(props);

    this.toggleStep = this.toggleStep.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleStep(e) {
    e.preventDefault();
    const toggledStep = merge({}, this.props.step, { done: !this.props.step.done} )
    this.props.receiveStep(toggledStep);
  }

  handleDelete(e) {
    e.preventDefault();
    const { step, removeStep } = this.props;
    let result = confirm('Are you sure you want to delete?');
    result ? removeStep(step) : null;
  }

  render() {
    const { step } = this.props;
    const { title, done, body } = step;

    return (
      <div>
        <h5 id='step-title'>{title}</h5>
        <h5 id='step-body'>{body}</h5>
        <h5>Status: {done ? 'Done' : 'Undone'}</h5>
        <div>
          <button onClick={this.toggleStep}>{done ? 'Undo' : 'Done'}</button>
          <button onClick={this.handleDelete}>Delete Step</button>
        </div>
      </div>
    )

  }
}

export default StepListItem

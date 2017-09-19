import React, { Component } from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { steps, receiveStep, todoId, } = this.props;

    const allSteps = steps.map( step => {
      return (
      <StepListItemContainer key={step.id} step={step}/>
      )
    });

    return (
      <div>
        <h4>Steps</h4>
        <ul>
          {allSteps}
        </ul>
          {<StepForm todoId={todoId} receiveStep={receiveStep}/>}
      </div>
    )
  }
}

export default StepList;

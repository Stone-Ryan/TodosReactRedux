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
      <div className='step-list-with-form'>
        <div className='step-header-list'>
          <h4 className= 'step-header'>Steps</h4>
          <ul className='step-list'>
            {allSteps}
          </ul>
        </div>
        {<StepForm className='step-form' todoId={todoId} receiveStep={receiveStep}/>}
      </div>
    )
  }
}

export default StepList;

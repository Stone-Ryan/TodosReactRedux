import { connect } from 'react-redux';
import { receiveStep } from '../../actions/steps_actions';
import StepList from './step_list';
import { stepsByTodoId } from '../../reducers/selectors';

const mapStateToProps = (state, { todoId }) => ({
  steps: stepsByTodoId(state, todoId),
  todoId
});

const mapDispatchToProps = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);

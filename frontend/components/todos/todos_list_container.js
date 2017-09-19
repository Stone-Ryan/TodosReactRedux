import { connect } from 'react-redux';
import TodosList from './todos_list';
import { allTodos } from '../../reducers/selectors';
import {
  receiveTodo,
  receiveTodos,
  removeTodo,
} from '../../actions/todos_actions';


const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodos: () => dispatch(receiveTodos()),
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);

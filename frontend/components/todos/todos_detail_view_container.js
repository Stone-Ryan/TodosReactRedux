import { connect } from 'react-redux';
import TodosDetailView from './todos_detail_view';
import { removeTodo } from '../../actions/todos_actions';


const mapDispatchToProps = dispatch => ({
  removeTodo: todo => dispatch(removeTodo(todo)),
})


export default connect(
  null,
  mapDispatchToProps
)(TodosDetailView);

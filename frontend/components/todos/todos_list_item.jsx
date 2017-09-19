import React, {Component} from 'react';
import merge from 'lodash/merge';
import TodosDetailViewContainer from './todos_detail_view_container';

class TodosListItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      show: false,
    }
    this.toggleTodo = this.toggleTodo.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleTodo(e) {
    e.preventDefault();
    const toggledTodo = merge({}, this.props.todo, { done: !this.props.todo.done} )
    this.props.receiveTodo(toggledTodo);
  }

  toggleShow(e) {
    e.preventDefault();
    const { show } = this.state;
    this.setState({ show: !show });
  }


  render() {
    const { show } = this.state;
    const { todo } = this.props;
    const { title, done } = todo;

    let detail;

    if (this.state.show) {
      detail = <TodosDetailViewContainer todo={todo}/>
    }
    return (
      <div>

        <div className='todo-title-and-status'>
          <h3 className='todo-title' onClick={this.toggleShow} id='todo-title'>{title}</h3>
          <button className='todo-status-button' onClick={this.toggleTodo}>
            {done ? 'Undo' : 'Done'}
          </button>
        </div>
        
        <div>
          {detail}
        </div>
      </div>
    )

  }
}

export default TodosListItem

import React, { Component } from 'react';
import TodosListItem from './todos_list_item';
import TodosForm from './todos_form'
class TodosList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, receiveTodo, removeTodo } = this.props;

    const allTodos = todos.map( todo => {
      return (
        <TodosListItem
          key={`todo-list-item${todo.id}`}
          todo={todo}
          receiveTodo={receiveTodo}
          removeTodo={removeTodo}/>
      )
    });

    return (
      <div className='todo-list'>
        <h1 className='header'>Todos</h1>
        <div className='todo-list-with-form'>
          <ul className='todo-items'>
            {allTodos}
          </ul>
          <TodosForm receiveTodo={receiveTodo}/>
        </div>
      </div>
    )
  }
}

export default TodosList;

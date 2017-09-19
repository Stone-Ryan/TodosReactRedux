import React, { Component } from 'react';

class TodosDetailView extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const { todo, removeTodo } = this.props;
    let result = confirm('Are you sure you want to delete?');
    result ? removeTodo(todo) : null;
  }

  render() {
    const { todo, removeTodo } = this.props;
    const { body, done } = todo;

    const status = todo.done ? 'Completed' : 'Uncompleted';

    return (
      <div>
        <p>Body: {body}</p>
        <p>Status: {status}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default TodosDetailView;

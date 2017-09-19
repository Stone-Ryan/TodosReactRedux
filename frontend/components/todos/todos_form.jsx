import React, {Component} from 'react';
import { uniqueId } from '../../util/id_gen';

class TodosForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(propety) {
    return e => this.setState({ [propety]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { receiveTodo } = this.props;
    const todo = Object.assign({}, this.state, {id: uniqueId()})
    receiveTodo(todo);
    this.setState({
      title: '',
      body: '',
    })
  }

  render() {

    const { title, body } = this.state;
      return (
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <label>
          Title:
        </label>
          <input
            className='title-input'
            ref='title'
            value={title}
            placeholder='Title'
            onChange={this.update('title')}
            required></input>
        <label>
          Body:
        </label>
          <textarea
            className='body-input'
            ref='body'
            cols='30'
            value={body}
            placeholder='Body'
            onChange={this.update('body')}
            required></textarea>
        <button className='create-button'>Create New Todo</button>
      </form>
    )

  }
}

export default TodosForm

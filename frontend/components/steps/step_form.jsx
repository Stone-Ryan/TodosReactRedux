import React, {Component} from 'react';
import { uniqueId } from '../../util/id_gen';

class StepForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
      done: false,
      todoId: this.props.todoId,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(propety) {
    return e => this.setState({ [propety]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { receiveStep } = this.props;
    const step = Object.assign({}, this.state, {id: uniqueId()})
    receiveStep(step);
    this.setState({
      title: '',
      body: '',
    })
  }

  render() {

    const { title, body } = this.state;
      return (
      <form className='step-form' onSubmit={this.handleSubmit}>
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
          <input
            className='body-input'
            ref='body'
            value={body}
            placeholder='Body'
            onChange={this.update('body')}
            required></input>
        <button className='create-button'>Create New Step</button>
      </form>
    )

  }
}

export default StepForm

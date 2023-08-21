import { Component } from 'react';
import { Form, TextArea, Button } from './TodoEditor.style';

export class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({
      message: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);

    this.reset();
  };

  reset = () => {
    this.setState({
      message: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <TextArea
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Add new Todo"
        ></TextArea>
        <Button>Send</Button>
      </Form>
    );
  }
}

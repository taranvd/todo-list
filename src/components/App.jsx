import { Component } from 'react';
import { Container } from './Container/Container.styled';
import { TodoList } from './TodoList/TodoList';
import { TodoEditor } from './TodoEditor/TodoEditor';
import todos from './todo.json';
import shortid from 'shortid';

export class App extends Component {
  state = {
    todos,
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [...todos, todo],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  onToggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  render() {
    return (
      <Container>
        <TodoEditor onSubmit={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          onDelete={this.deleteTodo}
          onToggleCompleted={this.onToggleCompleted}
        />
      </Container>
    );
  }
}

import { Component } from 'react';
import { Container } from './Container/Container.styled';
import { TodoList } from './TodoList/TodoList';
import { TodoEditor } from './TodoEditor/TodoEditor';
import { Filter } from './FIlter/Filter';
import todos from './todo.json';
import shortid from 'shortid';

export class App extends Component {
  state = {
    todos,
    filter: '',
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

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={this.state.filter} changeFilter={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDelete={this.deleteTodo}
          onToggleCompleted={this.onToggleCompleted}
        />
      </Container>
    );
  }
}

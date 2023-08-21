import { Button, ItemList, List } from './TodoList.styled';
import { AiFillDelete } from 'react-icons/ai';

export const TodoList = ({ todos, onDelete, onToggleCompleted }) => (
  <List>
    {todos.map(({ id, text, completed }) => {
      return (
        <ItemList key={id} data-iscompleted={completed.toString()}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />

          <p>{text}</p>

          <Button type="button" onClick={() => onDelete(id)}>
            <AiFillDelete />
          </Button>
        </ItemList>
      );
    })}
  </List>
);

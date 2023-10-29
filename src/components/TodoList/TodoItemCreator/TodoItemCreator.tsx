import { FormControl, TextField } from '@mui/material';
import { ITodoItem } from 'src/interfaces/Todo';
import { v4 as uuidv4 } from 'uuid';

/* eslint-disable-next-line */
export interface TodoItemCreatorProps {
  onSubmit: (newTodoItem: ITodoItem) => void;
}

export function TodoItemCreator(props: TodoItemCreatorProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent page refresh
    event.preventDefault();

    // Don't add empty todo items
    if (!(event.target as HTMLFormElement)['new-todo-item'].value) return;

    // Create new todo item with unique id
    const newTodoItem: ITodoItem = {
      id: uuidv4(),
      content: (event.target as HTMLFormElement)['new-todo-item'].value,
      done: false,
    };

    // Handle todo item creation in parent component
    props.onSubmit(newTodoItem);

    // Reset form
    (event.target as HTMLFormElement)['new-todo-item'].value = '';
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit}>
      <TextField
        id="new-todo-item"
        label="New Todo Item"
        variant="outlined"
        size="small"
        fullWidth
      />
    </FormControl>
  );
}

export default TodoItemCreator;

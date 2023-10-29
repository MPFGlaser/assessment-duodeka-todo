import { Checkbox, Divider, IconButton, InputBase, Paper } from '@mui/material';
import { ITodoItem } from 'src/interfaces/Todo';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

export interface TodoItemProps {
  data: ITodoItem;
  onChange: (updatedTodoItem: ITodoItem) => void;
  onDelete: (todoItem: ITodoItem) => void;
}

export function TodoItem(props: TodoItemProps) {
  const handleCheckbox = () => {
    const updatedTodoItem: ITodoItem = {
      id: props.data.id,
      content: props.data.content,
      done: !props.data.done,
    };

    props.onChange(updatedTodoItem);
  };

  const handleEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTodoItem: ITodoItem = {
      id: props.data.id,
      content: event.target.value,
      done: props.data.done,
    };

    props.onChange(updatedTodoItem);
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onDelete(props.data);
  };

  return (
    <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
      <Checkbox
        id="checkbox"
        checked={props.data.done}
        onChange={handleCheckbox}
      />
      <InputBase
        id="content"
        defaultValue={props.data.content}
        fullWidth
        onChange={handleEdit}
      />
      <Divider orientation="vertical" sx={{ height: 28, m: 0.5 }} />
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
}

export default TodoItem;

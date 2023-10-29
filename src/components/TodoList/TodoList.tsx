import { ITodoItem } from 'src/interfaces/Todo';
import TodoItem from './TodoItem/TodoItem';
import { Divider, Stack } from '@mui/material';
import TodoItemCreator from './TodoItemCreator/TodoItemCreator';

export interface TodoListProps {
  content: ITodoItem[];
  creationHandler: (newTodoItem: ITodoItem) => void;
  changeHandler: (updatedTodoItem: ITodoItem) => void;
  deleteHandler: (todoItem: ITodoItem) => void;
}

export function TodoList(props: TodoListProps) {
  let sortedContent: ITodoItem[] | null = [];

  if (Array.isArray(props.content) && props.content.length > 0) {
    sortedContent = props.content.sort((a, b) => {
      if (a.done && !b.done) {
        return 1;
      } else if (!a.done && b.done) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  return (
    <div>
      <Stack spacing={1}>
        {sortedContent.length ? null : <div>You've got nothing to do!</div>}
        {sortedContent.map((item) => (
          <TodoItem
            key={item.id}
            data={item}
            onChange={props.changeHandler}
            onDelete={props.deleteHandler}
          />
        ))}
        <Divider />
        <TodoItemCreator onSubmit={props.creationHandler} />
      </Stack>
    </div>
  );
}

export default TodoList;

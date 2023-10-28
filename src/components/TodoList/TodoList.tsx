import { ITodoItem } from 'src/interfaces/Todo';
import styles from './TodoList.module.scss';
import TodoItem from './TodoItem/TodoItem';
import { Stack } from '@mui/material';

export interface TodoListProps {
  content: ITodoItem[];
}

export function TodoList(props: TodoListProps) {
  return (
    <div className={styles['container']}>
      <Stack spacing={1}>
        {props.content.map((item) => (
          <TodoItem data={item} />
        ))}
      </Stack>
    </div>
  );
}

export default TodoList;

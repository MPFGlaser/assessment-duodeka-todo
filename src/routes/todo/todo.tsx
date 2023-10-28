import TodoList from 'src/components/TodoList/TodoList';
import styles from './todo.module.scss';
import { ITodoItem } from 'src/interfaces/Todo';
import { Typography } from '@mui/material';

const dummydata: ITodoItem[] = [
  {
    id: 1,
    content: 'Todo 1',
    done: false,
  },
  {
    id: 2,
    content: 'Todo 2',
    done: true,
  },
  {
    id: 3,
    content: 'Todo 3',
    done: false,
  },
  {
    id: 4,
    content: 'Todo 4',
    done: true,
  },
];

export function Todo() {
  return (
    <div className={styles['container']}>
      <Typography variant="h4">TODO List</Typography>
      <TodoList content={dummydata} />
    </div>
  );
}

export default Todo;

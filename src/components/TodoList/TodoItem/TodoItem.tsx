import { Card, Checkbox } from '@mui/material';
import styles from './TodoItem.module.scss';
import { ITodoItem } from 'src/interfaces/Todo';

/* eslint-disable-next-line */
export interface TodoItemProps {
  data: ITodoItem;
}

export function TodoItem(props: TodoItemProps) {
  return (
    <Card>
      <Checkbox checked={props.data.done} />
      <span className={styles['content']}>{props.data.content}</span>
    </Card>
  );
}

export default TodoItem;

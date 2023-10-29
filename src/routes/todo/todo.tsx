import TodoList from 'src/components/TodoList/TodoList';
import { Typography } from '@mui/material';
import { useGlobalState } from 'src/util/GlobalStateProvider';
import { ITodoItem } from 'src/interfaces/Todo';

export function Todo() {
  const { state, dispatch } = useGlobalState();

  /**
   * Create a new todo item in the globalstate
   * @param newTodoItem {ITodoItem}
   */
  const handleCreation = (newTodoItem: ITodoItem) => {
    dispatch({
      type: 'UPDATE_STATE',
      payload: {
        todos: [...state.todos, newTodoItem],
      },
    });
  };

  /**
   * Update an existing todo item in the globalstate
   * @param updatedTodoItem {ITodoItem}
   */
  const handleChange = (updatedTodoItem: ITodoItem) => {
    dispatch({
      type: 'UPDATE_STATE',
      payload: {
        todos: state.todos.map((item) => {
          if (item.id === updatedTodoItem.id) {
            return {
              ...item,
              ...updatedTodoItem,
            };
          }
          return item;
        }),
      },
    });
  };

  /**
   * Delete a todo item from the globalstate
   * @param todoItem {ITodoItem}
   */
  const handleDelete = (todoItem: ITodoItem) => {
    dispatch({
      type: 'UPDATE_STATE',
      payload: {
        todos: state.todos.filter((item) => item.id !== todoItem.id),
      },
    });
  };

  return (
    <div>
      <Typography variant="h4">TODO List</Typography>
      <TodoList
        content={state.todos}
        creationHandler={handleCreation}
        changeHandler={handleChange}
        deleteHandler={handleDelete}
      />
    </div>
  );
}

export default Todo;

import { render } from '@testing-library/react';

import TodoList from './TodoList';

describe('TodoList', () => {
  it('should render successfully', () => {
    // Arrange
    const creationHandler = vitest.fn();
    const changeHandler = vitest.fn();
    const deleteHandler = vitest.fn();

    const content = [
      {
        id: '1',
        content: 'Test',
        done: false,
      },
      {
        id: '2',
        content: 'Test',
        done: true,
      },
    ];

    // Act
    const { baseElement } = render(
      <TodoList
        content={content}
        creationHandler={creationHandler}
        changeHandler={changeHandler}
        deleteHandler={deleteHandler}
      />
    );

    // Assert
    expect(baseElement).toBeTruthy();
  });
});

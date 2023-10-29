import { render } from '@testing-library/react';

import TodoItem from './TodoItem';

describe('TodoItem', () => {
  it('should render successfully', () => {
    // Arrange
    const onChange = vitest.fn();
    const onDelete = vitest.fn();

    const data = {
      id: '1',
      content: 'Test',
      done: false,
    };

    // Act
    const { baseElement } = render(
      <TodoItem data={data} onChange={onChange} onDelete={onDelete} />
    );

    // Assert
    expect(baseElement).toBeTruthy();
  });
});

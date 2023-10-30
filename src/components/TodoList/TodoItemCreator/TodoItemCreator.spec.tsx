import { render } from '@testing-library/react';

import TodoItemCreator from './TodoItemCreator';

describe('TodoItemCreator', () => {
  const onSubmit = vitest.fn();

  it('should render successfully', () => {
    const { baseElement } = render(<TodoItemCreator onSubmit={onSubmit} />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import TodoItemCreator from './TodoItemCreator';

describe('TodoItemCreator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoItemCreator />);
    expect(baseElement).toBeTruthy();
  });
});

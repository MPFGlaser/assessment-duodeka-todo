import { render } from '@testing-library/react';

import App from './app';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />, { wrapper: MemoryRouter });
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />, { wrapper: MemoryRouter });
    expect(getByText(/DUODEKA TODO App/gi)).toBeTruthy();
  });
});

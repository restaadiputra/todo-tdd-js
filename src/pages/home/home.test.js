import React from 'react';
import { render } from '@testing-library/react';
import Home from './home';

test('render without crash', () => {
  const { container } = render(<Home />);
  expect(container.firstChild).toMatchSnapshot();
});

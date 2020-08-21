import React from 'react';
import Logo from '../logo';
import { renderWithRouter } from 'test/utils';

test('render without error', () => {
  const { container, getByText } = renderWithRouter(<Logo />);
  expect(getByText(/simple todo/i)).toBeInTheDocument();
  expect(container.firstChild.getAttribute('href')).toBe('/');
  expect(container.firstChild).toMatchSnapshot();
});

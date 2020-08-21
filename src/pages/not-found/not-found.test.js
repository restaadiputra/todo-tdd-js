import React from 'react';
import NotFound from './not-found';
import { renderWithRouter } from 'test/utils';

test('render without crash', () => {
  const { getByText, container } = renderWithRouter(<NotFound />);
  const homeLink = getByText(/back to home/i);
  expect(homeLink).toBeInTheDocument;
  expect(container.firstChild).toMatchSnapshot();
});

import React from 'react';
import NavItem from '../nav-item';
import { renderWithRouter } from 'test/utils';

test('render without crash', () => {
  const { getByText, container } = renderWithRouter(
    <NavItem path="/">Link</NavItem>
  );

  expect(getByText('Link')).toBeInTheDocument();
  expect(container.firstChild.getAttribute('href')).toBe('/');
  expect(container.firstChild).toMatchSnapshot();
});

test('render without label', () => {
  const { container } = renderWithRouter(<NavItem path="/"></NavItem>);
  expect(container.firstChild.firstChild.textContent).toBe('');
});

test('render without active css if route is not match', () => {
  const { container } = renderWithRouter(<NavItem path="/testing"></NavItem>);
  expect(container.firstChild).toMatchSnapshot();
});

import React from 'react';
import Menu from '../menu';
import { renderWithRouter } from 'test/utils';

test('contain hidden class when menu is not open', () => {
  const { container } = renderWithRouter(<Menu openMenu={false} />, {});
  expect(container.firstChild.getAttribute('class')).toContain('max-h-0');
  expect(container.firstChild).toMatchSnapshot();
});

test('not contain hidden class when menu is open', () => {
  const { container } = renderWithRouter(<Menu openMenu={true} />, {});
  expect(container.firstChild.getAttribute('class')).toContain('max-h-200');
  expect(container.firstChild).toMatchSnapshot();
});

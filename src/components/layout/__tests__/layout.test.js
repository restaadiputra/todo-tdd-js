import React from 'react';
import UserEvent from '@testing-library/user-event';
import Layout from '../layout';
import { renderWithRouter } from 'test/utils';

test('render without error', () => {
  const { getByTestId, container } = renderWithRouter(<Layout />);
  const menuButton = getByTestId('menu-button');
  const menu = getByTestId('menu');

  expect(menu.getAttribute('class')).toContain('hidden');
  UserEvent.click(menuButton);
  expect(menu.getAttribute('class')).not.toContain('hidden');
  UserEvent.click(menuButton);
  expect(menu.getAttribute('class')).toContain('hidden');
  expect(container.firstChild).toMatchSnapshot();
});

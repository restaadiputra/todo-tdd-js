import React from 'react';
import UserEvent from '@testing-library/user-event';
import Layout from '../layout';
import { renderWithRouter } from 'test/utils';

test('menu button works normally', () => {
  const { getByTestId, container, debug } = renderWithRouter(<Layout />);
  const menuButton = getByTestId('menu-button');
  const menu = getByTestId('menu');

  expect(menu.getAttribute('class')).toContain('max-h-0');
  UserEvent.click(menuButton);
  expect(menu.getAttribute('class')).toContain('max-h-200');
  UserEvent.click(menuButton);
  expect(menu.getAttribute('class')).toContain('max-h-0');
  expect(container.firstChild).toMatchSnapshot();
});

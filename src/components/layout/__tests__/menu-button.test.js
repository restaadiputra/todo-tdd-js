import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MenuButton from '../menu-button';

test('render without error', () => {
  const onClick = jest.fn();
  const { container } = render(<MenuButton onClick={onClick} />);

  fireEvent.click(container.firstChild);
  expect(onClick).toBeCalledTimes(1);
  expect(container.firstChild).toMatchSnapshot();
});

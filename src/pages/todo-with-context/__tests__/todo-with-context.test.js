import React from 'react';
import { render } from '@testing-library/react';
import TodoWithContext from '../todo-with-context';

test('render without crash', () => {
  render(<TodoWithContext />);
});

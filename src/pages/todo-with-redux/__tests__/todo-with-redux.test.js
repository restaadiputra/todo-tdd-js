import React from 'react';
import TodoWithRedux from '../todo-with-redux';
import { renderWithStore } from 'test/utils';

test('render without error', () => {
  renderWithStore(<TodoWithRedux />);
});

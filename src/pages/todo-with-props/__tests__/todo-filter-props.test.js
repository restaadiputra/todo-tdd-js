import React from 'react';
import { render, cleanup, fireEvent, within } from '@testing-library/react';

import TodoFilterProps from '../todo-filter-props';
import filterType from 'configs/filter';

afterEach(cleanup);

const onFilter = jest.fn();
const { all, complete, notComplete } = filterType;

test('call "onFilter" when button was clicked', () => {
  const { getByText } = render(
    <TodoFilterProps onFilter={onFilter} filter="" />
  );
  const allFilterBtn = getByText(all.label);
  const completeFilterBtn = getByText(complete.label);
  const notCompleteFilterBtn = getByText(notComplete.label);

  fireEvent.click(allFilterBtn);
  expect(onFilter).toHaveBeenCalledWith(all.value);
  fireEvent.click(completeFilterBtn);
  expect(onFilter).toHaveBeenCalledWith(complete.value);
  fireEvent.click(notCompleteFilterBtn);
  expect(onFilter).toHaveBeenCalledWith(notComplete.value);
  expect(onFilter).toHaveBeenCalledTimes(3);
});

test('have active style when click', () => {
  const { getByText, rerender } = render(
    <TodoFilterProps onFilter={onFilter} filter={all.value} />
  );
  const allFilterBtn = getByText(all.label);
  expect(allFilterBtn.getAttribute('class')).toContain(
    'bg-gray-400 border-gray-400'
  );

  rerender(<TodoFilterProps onFilter={onFilter} filter={complete.value} />);
  const completeFilterBtn = getByText(complete.label);
  expect(completeFilterBtn.getAttribute('class')).toContain(
    'bg-gray-400 border-gray-400'
  );

  rerender(<TodoFilterProps onFilter={onFilter} filter={notComplete.value} />);
  const notCompleteFilterBtn = getByText(notComplete.label);
  expect(notCompleteFilterBtn.getAttribute('class')).toContain(
    'bg-gray-400 border-gray-400'
  );
});

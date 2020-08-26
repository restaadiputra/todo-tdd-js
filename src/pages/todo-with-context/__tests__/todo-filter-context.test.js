import React from 'react';
import { render, cleanup, fireEvent, within } from '@testing-library/react';

import { TodoContext } from '../todo-provider';
import TodoFilterProps from '../todo-filter-context';
import filterType from 'configs/filter';

const { all, complete, notComplete } = filterType;
const setFilter = jest.fn();
const activeClass = 'bg-orange-400 border-orange-400';

afterEach(cleanup);

test('call "setFilter" when button was clicked with the right value', () => {
  const { getByText } = render(
    <TodoContext.Provider value={{ filter: 'RANDOM', setFilter }}>
      <TodoFilterProps />
    </TodoContext.Provider>
  );

  const allFilterBtn = getByText(all.label);
  const completeFilterBtn = getByText(complete.label);
  const notCompleteFilterBtn = getByText(notComplete.label);

  fireEvent.click(allFilterBtn);
  expect(setFilter).toHaveBeenCalledWith(all.value);
  fireEvent.click(completeFilterBtn);
  expect(setFilter).toHaveBeenCalledWith(complete.value);
  fireEvent.click(notCompleteFilterBtn);
  expect(setFilter).toHaveBeenCalledWith(notComplete.value);
  expect(setFilter).toHaveBeenCalledTimes(3);
});

test('have active style when click', () => {
  const { getByText, rerender } = render(
    <TodoContext.Provider value={{ filter: all.value, setFilter }}>
      <TodoFilterProps />
    </TodoContext.Provider>
  );
  const allFilterBtn = getByText(all.label);
  const completeFilterBtn = getByText(complete.label);
  const notCompleteFilterBtn = getByText(notComplete.label);

  expect(allFilterBtn.getAttribute('class')).toContain(activeClass);
  expect(allFilterBtn.getAttribute('disabled')).not.toBeNull();
  expect(completeFilterBtn.getAttribute('class')).not.toContain(activeClass);
  expect(completeFilterBtn.getAttribute('disabled')).toBeNull();
  expect(notCompleteFilterBtn.getAttribute('class')).not.toContain(activeClass);
  expect(notCompleteFilterBtn.getAttribute('disabled')).toBeNull();

  rerender(
    <TodoContext.Provider value={{ filter: complete.value, setFilter }}>
      <TodoFilterProps />
    </TodoContext.Provider>
  );
  expect(allFilterBtn.getAttribute('class')).not.toContain(activeClass);
  expect(allFilterBtn.getAttribute('disabled')).toBeNull();
  expect(completeFilterBtn.getAttribute('class')).toContain(activeClass);
  expect(completeFilterBtn.getAttribute('disabled')).not.toBeNull();
  expect(notCompleteFilterBtn.getAttribute('class')).not.toContain(activeClass);
  expect(notCompleteFilterBtn.getAttribute('disabled')).toBeNull();

  rerender(
    <TodoContext.Provider value={{ filter: notComplete.value, setFilter }}>
      <TodoFilterProps />
    </TodoContext.Provider>
  );
  expect(allFilterBtn.getAttribute('class')).not.toContain(activeClass);
  expect(allFilterBtn.getAttribute('disabled')).toBeNull();
  expect(completeFilterBtn.getAttribute('class')).not.toContain(activeClass);
  expect(completeFilterBtn.getAttribute('disabled')).toBeNull();
  expect(notCompleteFilterBtn.getAttribute('class')).toContain(activeClass);
  expect(notCompleteFilterBtn.getAttribute('disabled')).not.toBeNull();
});

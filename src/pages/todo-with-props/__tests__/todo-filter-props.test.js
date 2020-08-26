import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import TodoFilterProps from '../todo-filter-props';
import filterType from 'configs/filter';

const onFilter = jest.fn();
const { all, complete, notComplete } = filterType;
const activeClass = 'bg-gray-400 border-gray-400';

afterEach(cleanup);

describe('todo list display', () => {
  test('call "onFilter" when button was clicked with the right value', () => {
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
    const completeFilterBtn = getByText(complete.label);
    const notCompleteFilterBtn = getByText(notComplete.label);

    expect(allFilterBtn.getAttribute('class')).toContain(activeClass);
    expect(allFilterBtn.getAttribute('disabled')).not.toBeNull();
    expect(completeFilterBtn.getAttribute('class')).not.toContain(activeClass);
    expect(completeFilterBtn.getAttribute('disabled')).toBeNull();
    expect(notCompleteFilterBtn.getAttribute('class')).not.toContain(
      activeClass
    );
    expect(notCompleteFilterBtn.getAttribute('disabled')).toBeNull();

    rerender(<TodoFilterProps onFilter={onFilter} filter={complete.value} />);
    expect(allFilterBtn.getAttribute('class')).not.toContain(activeClass);
    expect(allFilterBtn.getAttribute('disabled')).toBeNull();
    expect(completeFilterBtn.getAttribute('class')).toContain(activeClass);
    expect(completeFilterBtn.getAttribute('disabled')).not.toBeNull();
    expect(notCompleteFilterBtn.getAttribute('class')).not.toContain(
      activeClass
    );
    expect(notCompleteFilterBtn.getAttribute('disabled')).toBeNull();

    rerender(
      <TodoFilterProps onFilter={onFilter} filter={notComplete.value} />
    );
    expect(allFilterBtn.getAttribute('class')).not.toContain(activeClass);
    expect(allFilterBtn.getAttribute('disabled')).toBeNull();
    expect(completeFilterBtn.getAttribute('class')).not.toContain(activeClass);
    expect(completeFilterBtn.getAttribute('disabled')).toBeNull();
    expect(notCompleteFilterBtn.getAttribute('class')).toContain(activeClass);
    expect(notCompleteFilterBtn.getAttribute('disabled')).not.toBeNull();
  });
});

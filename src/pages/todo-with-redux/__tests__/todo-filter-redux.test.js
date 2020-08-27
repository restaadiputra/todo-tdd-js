import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';

import TodoFilterRedux from '../todo-filter-redux';
import { renderWithStore } from 'test/utils';
import filterType from 'configs/filter';
import todo from 'store/todoSlice';
import filter from 'store/filterSlice';
import * as filterStore from 'store/filterSlice';
import { configureStore } from '@reduxjs/toolkit';

const { all, complete, notComplete } = filterType;
const activeClass = 'bg-purple-400 border-purple-400';

afterEach(cleanup);

test('call "setFilter" when button was clicked with the right value', () => {
  const mockSetFilter = jest.spyOn(filterStore, 'setFilter');
  const { getByText } = renderWithStore(<TodoFilterRedux />, {
    filter: 'RANDOM',
  });

  const allFilterBtn = getByText(all.label);
  const completeFilterBtn = getByText(complete.label);
  const notCompleteFilterBtn = getByText(notComplete.label);

  fireEvent.click(allFilterBtn);
  expect(mockSetFilter).toHaveBeenCalledWith(all.value);
  fireEvent.click(completeFilterBtn);
  expect(mockSetFilter).toHaveBeenCalledWith(complete.value);
  fireEvent.click(notCompleteFilterBtn);
  expect(mockSetFilter).toHaveBeenCalledWith(notComplete.value);
  expect(mockSetFilter).toHaveBeenCalledTimes(3);
});

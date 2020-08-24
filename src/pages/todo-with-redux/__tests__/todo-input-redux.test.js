import React from 'react';
import { cleanup, within, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoInputRedux from '../todo-input-redux';
import { renderWithStore } from 'test/utils';

const setup = () => {
  const { getByPlaceholderText, getByText } = renderWithStore(
    <TodoInputRedux />
  );

  const inputTodo = getByPlaceholderText(/your todo/i);
  const btnAddTodo = getByText(/add/i);

  return { inputTodo, btnAddTodo };
};

const todo = 'Shooping';

afterEach(cleanup);

test('render without error', () => {
  const { inputTodo, btnAddTodo } = setup();

  expect(inputTodo).toHaveAttribute('placeholder', 'Your Todo');
  expect(inputTodo).toHaveAttribute('type', 'text');

  expect(btnAddTodo.textContent).toBe('Add');
  expect(btnAddTodo).toHaveAttribute('type', 'submit');
  expect(btnAddTodo).toBeDisabled();
});

test('enable "Add" Button when input value is not empty', () => {
  const { inputTodo, btnAddTodo } = setup();
  expect(btnAddTodo).toBeDisabled();
  userEvent.type(inputTodo, todo);
  expect(btnAddTodo).not.toBeDisabled();
});

test('clear input field after add todo', () => {
  const { inputTodo, btnAddTodo } = setup();
  userEvent.type(inputTodo, todo);
  userEvent.click(btnAddTodo);
  expect(inputTodo.value).toBe('');
});

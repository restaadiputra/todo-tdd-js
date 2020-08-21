import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  within,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoWithProps from '../todo-with-props';

afterEach(cleanup);

const setup = () => {
  const { getByTestId } = render(<TodoWithProps />);

  const todoDisplay = getByTestId('todo-display');
  const todoInputField = getByTestId('todo-input-field');
  const todoAddButton = getByTestId('todo-add-btn');

  return {
    todoDisplay,
    todoInputField,
    todoAddButton,
  };
};

const todo = 'Shopping in the market';
const todo2 = 'Play with friend';

test('display new todo at the top of the list if user input one', () => {
  const { todoAddButton, todoDisplay, todoInputField } = setup();

  expect(todoDisplay.childElementCount).toBe(1);
  expect(todoDisplay.children[0].textContent).toBe('Todo List is Empty');

  userEvent.type(todoInputField, todo);
  userEvent.click(todoAddButton);
  const firstTodoEl = within(todoDisplay.children[0]);

  expect(todoDisplay.childElementCount).toBe(1);
  expect(firstTodoEl.getByTestId('todo-title').textContent).toBe(todo);

  userEvent.type(todoInputField, todo2);
  userEvent.click(todoAddButton);
  const secondTodoEl = within(todoDisplay.children[1]);

  expect(todoDisplay.childElementCount).toBe(2);
  expect(firstTodoEl.getByTestId('todo-title').textContent).toBe(todo2);
  expect(secondTodoEl.getByTestId('todo-title').textContent).toBe(todo);
});

test('delete one todo and display the rest', () => {
  const { todoAddButton, todoDisplay, todoInputField } = setup();

  userEvent.type(todoInputField, todo);
  userEvent.click(todoAddButton);
  userEvent.type(todoInputField, todo2);
  userEvent.click(todoAddButton);

  expect(todoDisplay.childElementCount).toBe(2);

  const firstTodoDeleteBtn = within(todoDisplay.children[0]).getByRole(
    'button'
  );
  fireEvent.click(firstTodoDeleteBtn);
  expect(todoDisplay.childElementCount).toBe(1);
  expect(screen.queryByText(todo2)).toBeNull();
  expect(screen.getByText(todo)).toBeInTheDocument();
});

test('update one todo and keep the rest', () => {
  const { todoAddButton, todoDisplay, todoInputField } = setup();

  userEvent.type(todoInputField, todo);
  userEvent.click(todoAddButton);
  userEvent.type(todoInputField, todo2);
  userEvent.click(todoAddButton);

  const firstTodoCheckbox = within(todoDisplay.children[0]).getByRole(
    'checkbox'
  );
  const secondTodoCheckbox = within(todoDisplay.children[1]).getByRole(
    'checkbox'
  );

  expect(firstTodoCheckbox.checked).toBeFalsy();
  expect(secondTodoCheckbox.checked).toBeFalsy();

  userEvent.click(firstTodoCheckbox);
  expect(firstTodoCheckbox.checked).toBeTruthy;
  expect(secondTodoCheckbox.checked).toBeFalsy();

  userEvent.click(firstTodoCheckbox);
  userEvent.click(secondTodoCheckbox);
  expect(firstTodoCheckbox.checked).toBeFalsy();
  expect(secondTodoCheckbox.checked).toBeTruthy();
});

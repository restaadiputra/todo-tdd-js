import React from 'react';
import { render, cleanup, within, fireEvent } from '@testing-library/react';
import TodoDisplayContext from '../todo-display-context';
import TodoProvider from '../todo-provider';

const todoList = [
  { id: 1, title: 'Shopping', status: 'done' },
  { id: 2, title: 'Shopping again', status: 'not-done' },
  { id: 3, title: 'Shopping again and again', status: 'done' },
];

const setup = (initialState = []) => {
  return {
    ...render(
      <TodoProvider initialState={initialState}>
        <TodoDisplayContext />
      </TodoProvider>
    ),
  };
};

afterEach(cleanup);

test('display empty wording if todoList is empty', () => {
  const { getByText } = setup();
  expect(getByText(/todo list is empty/i)).toBeInTheDocument();
});

test('display todo list if todoList is not an empty array', () => {
  const { getByTestId, getByText } = setup(todoList);
  const todoDisplay = getByTestId('todo-display');
  expect(todoDisplay.childElementCount).toBe(3);
  expect(getByText(todoList[0].title)).toBeInTheDocument();
  expect(getByText(todoList[1].title)).toBeInTheDocument();
  expect(getByText(todoList[2].title)).toBeInTheDocument();
});

test('delete one todo and display the rest', () => {
  const { getByTestId, getByText, queryByText } = setup(todoList);
  const todoDisplay = getByTestId('todo-display');
  const firstTodoElement = todoDisplay.children[0];
  const deleteBtn = within(firstTodoElement).getByRole('button');

  expect(todoDisplay.childElementCount).toBe(3);
  fireEvent.click(deleteBtn);
  expect(todoDisplay.childElementCount).toBe(2);
  expect(queryByText(todoList[0].title)).toBeNull();
  expect(getByText(todoList[1].title)).toBeInTheDocument();
  expect(getByText(todoList[2].title)).toBeInTheDocument();
});

test('change one todo status and keep the rest todo same', () => {
  const { getByTestId } = setup(todoList);
  const todoDisplay = getByTestId('todo-display');

  const statusBtn0 = within(todoDisplay.children[0]).getByRole('checkbox');
  const statusBtn1 = within(todoDisplay.children[1]).getByRole('checkbox');
  const statusBtn2 = within(todoDisplay.children[2]).getByRole('checkbox');

  expect(statusBtn0.checked).toBe(todoList[0].status === 'done');
  expect(statusBtn1.checked).toBe(todoList[1].status === 'done');
  expect(statusBtn2.checked).toBe(todoList[2].status === 'done');
  fireEvent.click(statusBtn0);
  fireEvent.click(statusBtn1);
  fireEvent.click(statusBtn2);
  expect(statusBtn0.checked).not.toBe(todoList[0].status === 'done');
  expect(statusBtn1.checked).not.toBe(todoList[1].status === 'done');
  expect(statusBtn2.checked).not.toBe(todoList[2].status === 'done');
});

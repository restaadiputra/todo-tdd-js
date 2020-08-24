import React from 'react';
import { cleanup, within, fireEvent } from '@testing-library/react';
import TodoDisplayRedux from '../todo-display-redux';
import { renderWithStore } from 'test/utils';

const todoList = [
  { id: 1, title: 'Shopping', status: true },
  { id: 2, title: 'Shopping again', status: false },
  { id: 3, title: 'Shopping again and again', status: true },
];

afterEach(cleanup);

test('display empty wording if todoList is empty', () => {
  const { getByText } = renderWithStore(<TodoDisplayRedux />);
  expect(getByText(/todo list is empty/i)).toBeInTheDocument();
});

test('display todo list if todoList is not an empty array', () => {
  const { getByTestId, getByText } = renderWithStore(
    <TodoDisplayRedux />,
    todoList
  );
  const todoDisplay = getByTestId('todo-display');
  expect(todoDisplay.childElementCount).toBe(3);
  expect(getByText(todoList[0].title)).toBeInTheDocument();
  expect(getByText(todoList[1].title)).toBeInTheDocument();
  expect(getByText(todoList[2].title)).toBeInTheDocument();
});

test('delete one todo and display the rest', () => {
  const { getByTestId, getByText, queryByText } = renderWithStore(
    <TodoDisplayRedux />,
    todoList
  );
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
  const { getByTestId } = renderWithStore(<TodoDisplayRedux />, todoList);
  const todoDisplay = getByTestId('todo-display');

  const statusBtn0 = within(todoDisplay.children[0]).getByRole('checkbox');
  const statusBtn1 = within(todoDisplay.children[1]).getByRole('checkbox');
  const statusBtn2 = within(todoDisplay.children[2]).getByRole('checkbox');

  expect(statusBtn0.checked).toBe(todoList[0].status);
  expect(statusBtn1.checked).toBe(todoList[1].status);
  expect(statusBtn2.checked).toBe(todoList[2].status);
  fireEvent.click(statusBtn0);
  fireEvent.click(statusBtn1);
  fireEvent.click(statusBtn2);
  expect(statusBtn0.checked).not.toBe(todoList[0].status);
  expect(statusBtn1.checked).not.toBe(todoList[1].status);
  expect(statusBtn2.checked).not.toBe(todoList[2].status);
});

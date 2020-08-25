import React from 'react';
import { render, cleanup, fireEvent, within } from '@testing-library/react';
import TodoDisplayProps from '../todo-display-props';

const emptyTodoList = [];
const todoList = [
  { id: 1, title: 'Shopping', status: 'done' },
  { id: 2, title: 'Shopping again', status: 'not-done' },
  { id: 3, title: 'Shopping again and again', status: 'done' },
];

const defaultProps = {
  onRemoveTodo: () => {},
  onChangeTodoStatus: () => {},
};

const setup = (props) => ({
  ...render(<TodoDisplayProps {...defaultProps} {...props} />),
});

afterEach(cleanup);

describe('TodoDisplay Component', () => {
  test('display empty wording if prop "todo" is undefined or an empty array', () => {
    const { getByText, rerender } = setup();
    expect(getByText(/todo list is empty/i)).toBeInTheDocument();
    rerender(<TodoDisplayProps {...defaultProps} todoList={emptyTodoList} />);
    expect(getByText(/todo list is empty/i)).toBeInTheDocument();
  });

  test('display todo list if todo is not empty array or undefined', () => {
    const { getByTestId, getByText } = setup({ todoList });
    const todoDisplay = getByTestId('todo-display');
    expect(todoDisplay.childElementCount).toBe(3);
    expect(getByText(todoList[0].title)).toBeInTheDocument();
    expect(getByText(todoList[1].title)).toBeInTheDocument();
    expect(getByText(todoList[2].title)).toBeInTheDocument();
  });

  test('call "onRemoveTodo" function when remove button was clicked', () => {
    const onRemoveTodo = jest.fn();
    const { getByTestId } = setup({ todoList, onRemoveTodo });
    const firstTodoElement = getByTestId('todo-display').children[0];
    const deleteBtn = within(firstTodoElement).getByRole('button');

    fireEvent.click(deleteBtn);
    expect(onRemoveTodo).toHaveBeenCalledTimes(1);
    expect(onRemoveTodo).toHaveBeenCalledWith(todoList[0].id);
  });

  test('call "onChangeTodoStatus when checkbox was checked"', () => {
    const onChangeTodoStatus = jest.fn();
    const { getByTestId } = setup({ todoList, onChangeTodoStatus });
    const firstTodoElement = getByTestId('todo-display').children[0];
    const statusBtn = within(firstTodoElement).getByRole('checkbox');

    fireEvent.click(statusBtn);
    expect(onChangeTodoStatus).toHaveBeenCalledTimes(1);
    expect(onChangeTodoStatus).toHaveBeenCalledWith(todoList[0].id);
  });
});
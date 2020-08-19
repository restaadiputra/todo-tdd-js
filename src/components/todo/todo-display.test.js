import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import TodoDisplay from './todo-display';

const emptyTodoList = [];
const todoList = [
  {
    id: 1,
    title: 'Shopping',
  },
  {
    id: 2,
    title: 'Shopping again',
  },
  {
    id: 3,
    title: 'Shopping again and again',
  },
];

const setup = (options = {}) => ({
  ...render(<TodoDisplay {...options} />),
});

afterEach(cleanup);

describe('TodoDisplay Component', () => {
  test('should render without error', () => {
    render(<TodoDisplay />);
  });

  test('display empty wording if prop "todo" is undefined or an empty array', () => {
    const { getByText, rerender } = setup();
    expect(getByText(/todo list is empty/i)).toBeInTheDocument();
    rerender(<TodoDisplay todoList={emptyTodoList} />);
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

  test('should call "onRemoveTodo" when remove button was clicked', () => {
    const onRemoveTodo = jest.fn(() => {});
    const { getByTestId } = setup({ todoList, onRemoveTodo });
    const todoDeleteBtn = getByTestId('todo-display').children[0].lastChild;
    fireEvent.click(todoDeleteBtn);
    expect(onRemoveTodo).toHaveBeenCalledTimes(1);
  });
});

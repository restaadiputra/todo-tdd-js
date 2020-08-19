import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import TodoDisplay from './todo-display';

const emptyTodoList = [];
const todoList = ['Shopping', 'Shopping again', 'Shopping again and again'];

afterEach(cleanup);

describe('TodoDisplay Component', () => {
  test('should render without error', () => {
    render(<TodoDisplay />);
  });

  test("display empty wording if prop 'todo' is undefined", () => {
    const { getByText } = render(<TodoDisplay />);
    expect(getByText(/todo list is empty/i)).toBeInTheDocument();
  });

  test("display empty wording if prop 'todo' is empty array", () => {
    const { getByText } = render(<TodoDisplay todoList={emptyTodoList} />);
    expect(getByText(/todo list is empty/i)).toBeInTheDocument();
  });

  test('display todo list if todo is not empty array or undefined', () => {
    render(<TodoDisplay todoList={todoList} />)
    const todoDisplay = screen.getByTestId('todo-display')
    expect(todoDisplay.childElementCount).toBe(3);
    expect(screen.getByText(todoList[0])).toBeInTheDocument();
    expect(screen.getByText(todoList[1])).toBeInTheDocument();
    expect(screen.getByText(todoList[2])).toBeInTheDocument();
  });
});

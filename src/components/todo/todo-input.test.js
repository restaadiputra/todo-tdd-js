import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoInput from './todo-input';

afterEach(cleanup);
const todo = 'Shooping';

const setup = (options = {}) => {
  render(<TodoInput {...options} />);

  const inputTodo = screen.getByPlaceholderText(/your todo/i);
  const btnAddTodo = screen.getByText(/add/i);

  return { inputTodo, btnAddTodo };
};

describe('TodoInput Component', () => {
  test('should render without error', () => {
    const { inputTodo, btnAddTodo } = setup();

    expect(inputTodo).toHaveAttribute('placeholder', 'Your Todo');
    expect(inputTodo).toHaveAttribute('type', 'text');

    expect(btnAddTodo.textContent).toBe('Add');
    expect(btnAddTodo).toHaveAttribute('type', 'submit');
    expect(btnAddTodo).toBeDisabled();
  });

  test('should enabled "Add" button when input is not empty', () => {
    const { inputTodo, btnAddTodo } = setup();

    userEvent.type(inputTodo, todo);
    expect(btnAddTodo).not.toBeDisabled();
    userEvent.click(btnAddTodo);
  });

  test('should call "onSubmitTodo" when button is clicked', () => {
    const onSubmitTodo = jest.fn(() => {});
    const { inputTodo, btnAddTodo } = setup({ onSubmitTodo });

    userEvent.type(inputTodo, todo);
    userEvent.click(btnAddTodo);

    expect(onSubmitTodo).toHaveBeenCalledTimes(1);
    expect(onSubmitTodo).toHaveBeenCalledWith(todo);
  });

  test('should clear input field after add todo', () => {
    const onSubmitTodo = jest.fn(() => {});
    const { inputTodo, btnAddTodo } = setup({ onSubmitTodo });

    userEvent.type(inputTodo, todo);
    userEvent.click(btnAddTodo);

    expect(inputTodo.value).toBe('');
  });
});

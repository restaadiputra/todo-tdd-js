import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainPage from './main-page';

afterEach(cleanup);

const setup = () => {
  const { getByTestId } = render(<MainPage />);

  const todoDisplay = getByTestId('todo-display');
  const todoInputField = getByTestId('todo-input-field');
  const todoAddButton = getByTestId('todo-add-btn');
  return {
    todoDisplay,
    todoInputField,
    todoAddButton,
  };
};

describe('MainPage Component', () => {
  test('should render without crash', () => {
    render(<MainPage />);
  });

  test('should display one new todo if user input one', () => {
    const newTodo = 'Shopping in the market';
    const { todoAddButton, todoDisplay, todoInputField } = setup();

    expect(todoDisplay.childElementCount).toBe(1);
    expect(todoDisplay.children[0].textContent).toBe('Todo List is Empty');

    userEvent.type(todoInputField, newTodo);
    userEvent.click(todoAddButton);

    expect(todoDisplay.childElementCount).toBe(1);

    expect(todoDisplay.children[0].firstChild.textContent).toBe(newTodo);
  });

  test('should display all todo with new todo if user input new one', () => {
    const newTodo = 'Shopping in the market';
    const anotherTodo = 'Play with friend';
    const { todoAddButton, todoDisplay, todoInputField } = setup();

    userEvent.type(todoInputField, newTodo);
    userEvent.click(todoAddButton);

    expect(todoDisplay.childElementCount).toBe(1);
    expect(todoDisplay.children[0].firstChild.textContent).toBe(newTodo);

    userEvent.type(todoInputField, anotherTodo);
    userEvent.click(todoAddButton);

    expect(todoDisplay.childElementCount).toBe(2);
    expect(todoDisplay.children[0].firstChild.textContent).toBe(anotherTodo);
    expect(todoDisplay.children[1].firstChild.textContent).toBe(newTodo);
  });

  test('should be able delete one todo and keep the rest', () => {
    const newTodo = 'Shopping in the market';
    const anotherTodo = 'Play with friend';
    const { todoAddButton, todoDisplay, todoInputField } = setup();

    userEvent.type(todoInputField, newTodo);
    userEvent.click(todoAddButton);
    userEvent.type(todoInputField, anotherTodo);
    userEvent.click(todoAddButton);
    expect(todoDisplay.children[0].firstChild.textContent).toBe(anotherTodo);
    expect(todoDisplay.children[1].firstChild.textContent).toBe(newTodo);
    expect(todoDisplay.childElementCount).toBe(2);

    const todoDelBtn = todoDisplay.children[0].lastChild;
    fireEvent.click(todoDelBtn);
    expect(todoDisplay.childElementCount).toBe(1);
    expect(todoDisplay.children[0].firstChild.textContent).toBe(newTodo);
  });
});

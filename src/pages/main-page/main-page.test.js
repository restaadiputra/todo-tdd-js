import React from 'react';
import { render, cleanup, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainPage from './main-page';
import { check } from 'prettier';

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
  test('display one new todo if user input one', () => {
    const newTodo = 'Shopping in the market';
    const { todoAddButton, todoDisplay, todoInputField } = setup();

    expect(todoDisplay.childElementCount).toBe(1);
    expect(todoDisplay.children[0].textContent).toBe('Todo List is Empty');

    userEvent.type(todoInputField, newTodo);
    userEvent.click(todoAddButton);

    const firstTodoElement = within(todoDisplay.children[0]);

    expect(todoDisplay.childElementCount).toBe(1);
    expect(firstTodoElement.getByTestId('todo-title').textContent).toBe(
      newTodo
    );
  });

  test('display all todo with new todo if user input new one', () => {
    const newTodo = 'Shopping in the market';
    const anotherTodo = 'Play with friend';
    const { todoAddButton, todoDisplay, todoInputField } = setup();

    userEvent.type(todoInputField, newTodo);
    userEvent.click(todoAddButton);

    const firstTodoElement = within(todoDisplay.children[0]);

    expect(todoDisplay.childElementCount).toBe(1);
    expect(firstTodoElement.getByTestId('todo-title').textContent).toBe(
      newTodo
    );

    userEvent.type(todoInputField, anotherTodo);
    userEvent.click(todoAddButton);

    const secondTodoElement = within(todoDisplay.children[1]);

    expect(todoDisplay.childElementCount).toBe(2);
    expect(firstTodoElement.getByTestId('todo-title').textContent).toBe(
      anotherTodo
    );
    expect(secondTodoElement.getByTestId('todo-title').textContent).toBe(
      newTodo
    );
  });

  test('delete one todo and keep the rest', () => {
    const newTodo = 'Shopping in the market';
    const anotherTodo = 'Play with friend';
    const { todoAddButton, todoDisplay, todoInputField } = setup();

    userEvent.type(todoInputField, newTodo);
    userEvent.click(todoAddButton);
    userEvent.type(todoInputField, anotherTodo);
    userEvent.click(todoAddButton);

    const firstTodoElement = within(todoDisplay.children[0]);
    const secondTodoElement = within(todoDisplay.children[1]);

    expect(todoDisplay.childElementCount).toBe(2);
    expect(firstTodoElement.getByTestId('todo-title').textContent).toBe(
      anotherTodo
    );
    expect(secondTodoElement.getByTestId('todo-title').textContent).toBe(
      newTodo
    );

    const todoDelBtn = within(todoDisplay.children[0]).getByRole('button');
    fireEvent.click(todoDelBtn);
    expect(todoDisplay.childElementCount).toBe(1);
    expect(firstTodoElement.getByTestId('todo-title').textContent).toBe(
      newTodo
    );
  });

  test('update one todo and keep the rest', () => {
    const newTodo = 'Shopping in the market';
    const { todoAddButton, todoDisplay, todoInputField } = setup();

    userEvent.type(todoInputField, newTodo);
    userEvent.click(todoAddButton);

    const todoElement = within(todoDisplay.children[0]);
    const checkbox = todoElement.getByRole('checkbox');

    expect(checkbox.checked).toBeFalsy();
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeTruthy();
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeFalsy();
  });
});

import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import MainPage from './main-page';

afterEach(cleanup)

describe('MainPage Component', () => {
  test('should render without crash', () => {
    render(<MainPage />);
  });

  test('should display one new todo if user input one', () => {
    const newTodo = 'Shopping in the market'
    render(<MainPage />)

    const todoDisplay = screen.getByTestId('todo-display')
    const todoInputField = screen.getByTestId('todo-input-field')
    const todoAddButton = screen.getByTestId('todo-add-btn')

    expect(todoDisplay.childElementCount).toBe(1)
    expect(todoDisplay.children[0].textContent).toBe('Todo List is Empty')

    userEvent.type(todoInputField, newTodo)
    userEvent.click(todoAddButton)

    expect(todoDisplay.childElementCount).toBe(1)
    expect(todoDisplay.children[0].textContent).toBe(newTodo)
  })

  test('should display all todo with new todo if user input new one', () => {
    const newTodo = 'Shopping in the market'
    const anotherTodo = 'Play with friend'
    render(<MainPage />)

    const todoDisplay = screen.getByTestId('todo-display')
    const todoInputField = screen.getByTestId('todo-input-field')
    const todoAddButton = screen.getByTestId('todo-add-btn')

    userEvent.type(todoInputField, newTodo)
    userEvent.click(todoAddButton)

    expect(todoDisplay.childElementCount).toBe(1)
    expect(todoDisplay.children[0].textContent).toBe(newTodo)

    userEvent.type(todoInputField, anotherTodo)
    userEvent.click(todoAddButton)

    expect(todoDisplay.childElementCount).toBe(2)
    expect(todoDisplay.children[0].textContent).toBe(anotherTodo)
    expect(todoDisplay.children[1].textContent).toBe(newTodo)
  })
  
  
});

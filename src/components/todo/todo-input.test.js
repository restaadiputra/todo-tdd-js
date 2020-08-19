import React from 'react';
import {render, screen, cleanup} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoInput from './todo-input'

afterEach(cleanup)
const todo = 'Shooping';

describe('TodoInput Component', () => {
  test('should render without error', () => {
    render(<TodoInput />)

    const inputTodo = screen.getByPlaceholderText(/your todo/i)
    const btnAddTodo = screen.getByText(/add/i)
    
    expect(inputTodo).toHaveAttribute('placeholder', "Your Todo")
    expect(inputTodo).toHaveAttribute('type', 'text')

    expect(btnAddTodo).toHaveAttribute('type', 'submit')
    expect(btnAddTodo).toBeDisabled()
  })

  test('should enabled "Add" button when input is not empty', () => {
    render(<TodoInput />)
    const inputTodo = screen.getByPlaceholderText(/your todo/i)
    const btnAddTodo = screen.getByText(/add/i)

    userEvent.type(inputTodo, todo)
    expect(btnAddTodo).not.toBeDisabled()
  })
  

  test('should call "onSubmitTodo" when button is clicked', () => {
    const mockOnSubmitTodo = jest.fn(() => {})

    render(<TodoInput onSubmitTodo={mockOnSubmitTodo} />)
    const inputTodo = screen.getByPlaceholderText(/your todo/i)
    const btnAddTodo = screen.getByText(/add/i)

    userEvent.type(inputTodo, todo)
    userEvent.click(btnAddTodo)

    expect(mockOnSubmitTodo).toHaveBeenCalledTimes(1)
    expect(mockOnSubmitTodo).toHaveBeenCalledWith(todo)
  })
  
})

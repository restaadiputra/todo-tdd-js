import React from 'react';
import {render, cleanup} from '@testing-library/react'
import TodoInput from './todo-input'

afterEach(cleanup)

describe('TodoInput Component', () => {
  test('should render without error', () => {
    const {getByPlaceholderText, getByText} =  render(<TodoInput />)

    const inputTodo = getByPlaceholderText(/your todo/i)
    expect(inputTodo).toHaveAttribute('placeholder', "Your Todo")
    expect(inputTodo).toHaveAttribute('type', 'text')

    const btnAddTodo = getByText(/add todo/i)
    expect(btnAddTodo).toHaveAttribute('type', 'submit')
  })
})

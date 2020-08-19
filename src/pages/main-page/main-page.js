import React, { useState } from 'react'
import {TodoDisplay, TodoInput} from 'components/todo'

function MainPage() {
  const [todoList, setTodoList] = useState([])

  const addTodo = (todo) => {
    setTodoList([todo,...todoList,])
  }

  return (
    <div>
      <TodoInput onSubmitTodo={addTodo} />
      <TodoDisplay todoList={todoList} />
    </div>
  )
}

export default MainPage


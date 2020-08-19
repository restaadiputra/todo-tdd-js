import React, { useState } from 'react';
import { TodoDisplay, TodoInput } from 'components/todo';

function MainPage() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList([{ id: todoList.length, title: todo }, ...todoList]);
  };

  const deleteTodoById = (id) => {
    const filteredTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredTodo);
  };

  return (
    <div>
      <TodoInput onSubmitTodo={addTodo} />
      <TodoDisplay todoList={todoList} onRemoveTodo={deleteTodoById} />
    </div>
  );
}

export default MainPage;

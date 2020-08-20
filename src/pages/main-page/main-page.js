import React, { useState } from 'react';
import { TodoDisplay, TodoInput } from 'components/todo';

function MainPage() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList([
      {
        id: todoList.length,
        title: todo,
        status: 'not-done',
      },
      ...todoList,
    ]);
  };

  const deleteTodoById = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const updateTodoById = (id) => {
    setTodoList(
      todoList.map((todo) => {
        return {
          ...todo,
          status: todo.status === 'done' ? 'not-done' : 'done',
        };
      })
    );
  };

  return (
    <div className="container mx-auto mt-4">
      <TodoInput onSubmitTodo={addTodo} />
      <hr className="max-w-lg mx-auto my-4 border rounded border-gray-2" />
      <TodoDisplay
        todoList={todoList}
        onRemoveTodo={deleteTodoById}
        onChangeTodoStatus={updateTodoById}
      />
    </div>
  );
}

export default MainPage;

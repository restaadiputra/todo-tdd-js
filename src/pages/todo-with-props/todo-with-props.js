import React, { useState } from 'react';
import TodoInput from './todo-input-props';
import TodoDisplay from './todo-display-props';

function TodoWithProps() {
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
      todoList.map((todo) => ({
        ...todo,
        status:
          todo.id === id
            ? todo.status === 'done'
              ? 'not-done'
              : 'done'
            : todo.status,
      }))
    );
  };

  return (
    <>
      <TodoInput onSubmitTodo={addTodo} />
      <hr className="max-w-lg mx-auto my-4 border rounded border-gray-2" />
      <TodoDisplay
        todoList={todoList}
        onRemoveTodo={deleteTodoById}
        onChangeTodoStatus={updateTodoById}
      />
    </>
  );
}

export default TodoWithProps;

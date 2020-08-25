import React, { useState } from 'react';
import TodoInput from './todo-input-props';
import TodoDisplay from './todo-display-props';
import TodoFilter from './todo-filter-props';
import filterType from 'configs/filter';

function TodoWithProps() {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState(filterType.all.value);

  const addTodo = (todo) => {
    setTodoList([
      {
        id: todoList.length,
        title: todo,
        status: false,
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
        status: todo.id === id ? !todo.status : todo.status,
      }))
    );
  };

  return (
    <div className="relative">
      <TodoInput onSubmitTodo={addTodo} />
      <TodoFilter onFilter={setFilter} filter={filter} />
      <hr className="my-4 border rounded border-gray-2" />
      <TodoDisplay
        todoList={todoList}
        onRemoveTodo={deleteTodoById}
        onChangeTodoStatus={updateTodoById}
        filter={filter}
      />
    </div>
  );
}

export default TodoWithProps;

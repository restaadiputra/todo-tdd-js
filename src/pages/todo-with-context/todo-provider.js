import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import filterType from 'configs/filter';

export const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);

export const getFilteredTodo = (todoList, filter) => {
  switch (filter) {
    case filterType.all.value:
      return todoList;
    case filterType.complete.value:
      return todoList.filter((todo) => todo.status);
    case filterType.notComplete.value:
      return todoList.filter((todo) => !todo.status);
    default:
      return [];
  }
};

function TodoProvider({ initialState = {}, children }) {
  const [todoList, setTodoList] = useState(initialState.todoList || []);
  const [filter, setFilter] = useState(
    initialState.filter || filterType.all.value
  );

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
    <TodoContext.Provider
      value={{
        todoList: getFilteredTodo(todoList, filter),
        addTodo,
        deleteTodoById,
        updateTodoById,
        filter,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

TodoProvider.propTypes = {
  initialState: PropTypes.shape({
    todoList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired,
      })
    ),
    filter: PropTypes.string,
  }),
  children: PropTypes.node,
};

export default TodoProvider;

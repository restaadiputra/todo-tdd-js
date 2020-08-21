import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const TodoContext = createContext();

function TodoProvider({ initialState, children }) {
  const [todoList, setTodoList] = useState(initialState || []);

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
    <TodoContext.Provider
      value={{ todoList, addTodo, deleteTodoById, updateTodoById }}
    >
      {children}
    </TodoContext.Provider>
  );
}

TodoProvider.propTypes = {
  initialState: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ),
  children: PropTypes.node,
};

export default TodoProvider;

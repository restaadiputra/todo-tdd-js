import React from "react";
import PropTypes from "prop-types";

function TodoListDisplay({ todoList }) {
  if (!todoList || todoList.length === 0) {
    return (
      <div>
        <p>Todo List is Empty</p>
      </div>
    );
  }

  return (
    <div>
      {todoList.map((todo, index) => (
        <div key={index}>
          <p>{todo.title}</p>
          {todo.important === 'high' && (
            <span>Important</span>
          )}
        </div>
      ))}
    </div>
  );
}

TodoListDisplay.propTypes = {
  todoList: PropTypes.array,
};

export default TodoListDisplay;

import React from "react";
import PropTypes from "prop-types";

function TodoDisplay({ todo }) {
  if (!todo || todo.length === 0) {
    return (
      <div>
        <p>Todo is Empty</p>
      </div>
    );
  }

  return (
    <div>
      {todo.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          {item.important === 'high' && (
            <span>Important</span>
          )}
        </div>
      ))}
    </div>
  );
}

TodoDisplay.propTypes = {
  todo: PropTypes.array,
};

export default TodoDisplay;

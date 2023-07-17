import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
function TodoList({ text, completed }) {
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div className="task-text">
        {text}
      </div>
      <div className="task-icon-container">
        <AiOutlineDelete className="task-icon" />
      </div>
    </div>
  );
}
export default TodoList;

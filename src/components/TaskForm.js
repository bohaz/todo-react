import React from 'react';
import '../App.css';

function TaskForm() {
  return (
    <form className="todo-form">
      <input type="text" name="text" className="todo-input" placeholder="Add task" />
      <button type="button" className="todo-button">Add</button>
    </form>
  );
}
export default TaskForm;

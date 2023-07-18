import React, { useState } from 'react';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function TaskForm({ onSubmit }) {
  const [input, setInput] = useState('');

  TaskForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input.trim(), // Trims the input text
      completed: false,
    };
    onSubmit(newTask);
    setInput(''); // Clears the input after adding the task
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        className="todo-input"
        placeholder="Add task"
        value={input}
        onChange={handleChange}
      />
      <button type="submit" className="todo-button">
        Add
      </button>
    </form>
  );
}

export default TaskForm;

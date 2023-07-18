import React, { useState } from 'react';
import TaskForm from './TaskForm';
import '../App.css';
import TodoList from './TodoList';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      const newTask = {
        ...task,
        text: task.text.trim(),
      };

      const newTasks = [newTask, ...tasks];
      setTasks(newTasks);
    }
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const completeTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className="tasklist-container">
        {tasks.map((task) => (
          <TodoList
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;

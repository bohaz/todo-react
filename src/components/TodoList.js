import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';

const TodoList = ({
  id, text, completed, completeTask, removeTask,
}) => {
  const handleCompleteTask = () => {
    completeTask(id);
  };

  const handleRemoveTask = () => {
    removeTask(id);
  };

  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <span
        className="task-text"
        onClick={handleCompleteTask}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handleCompleteTask();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Marcar tarea "${text}" como completada`}
      >
        {text}
      </span>
      <div
        className="task-icon-container"
        onClick={handleRemoveTask}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handleRemoveTask();
          }
        }}
        role="button" // Agregamos el atributo role="button" para indicar que es un elemento interactivo
        tabIndex={0} // Hacemos el elemento enfocable con el teclado
        aria-label={`Eliminar tarea "${text}"`}
      >
        <AiOutlineDelete className="task-icon" />
      </div>
    </div>
  );
};

TodoList.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  completeTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default TodoList;

import './App.css';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className="todo-app">
      <div className="todo-app-content">
        <h1>Todo list React</h1>
        <TaskForm />
      </div>
    </div>
  );
}

export default App;

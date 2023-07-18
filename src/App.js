import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="todo-app">
      <div className="todo-app-content">
        <h1>Todo List | React</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;

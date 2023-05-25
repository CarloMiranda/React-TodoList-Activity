import { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='container'>
      <div className='d-flex justify-content-center m-5'>
        <h1><b>Todo List</b></h1>
      </div>
      <div className='text-center'>
        <TodoForm addTask={addTask} />
        <TodoList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
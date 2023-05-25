import { useState } from 'react'

function TodoForm({ addTask }) {
    const [taskTitle, setTaskTitle] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (taskTitle.trim() !== '') {
        addTask(taskTitle);
        setTaskTitle('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input className='border-0 shadow rounded-3 p-2'
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter task"/>
        <button className='addtask border-0 shadow rounded-3 p-2 ms-3' type="submit">Add Task</button>
      </form>
    );
  }

  export default TodoForm;
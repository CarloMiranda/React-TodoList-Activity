import { useState } from 'react'

function TodoForm({ addTask, isAddingTask }) {
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
          data-aos="fade-right"
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter task"/>
        <button className='addtask border-0 shadow rounded-3 p-2 ms-3' 
          data-aos="fade-left" 
          type="submit" 
          disabled={isAddingTask}>{isAddingTask ? 'Adding...' : 'Add Task'}
        </button>
        <div className='m-5'>
          {isAddingTask ? 
            <div class="spinner-border text-dark" role="status"></div> : ''}
        </div>
      </form>
    );
  }

  export default TodoForm;
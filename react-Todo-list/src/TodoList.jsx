
import TodoItem from './TodoItem';

function TodoList({ tasks, completeTask, deleteTask }) {
  
  return (
    <ul className='mt-5'>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;

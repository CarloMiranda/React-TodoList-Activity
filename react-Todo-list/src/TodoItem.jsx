
function TodoItem({ task, completeTask, deleteTask }) {

    
    const handleComplete = () => {
      completeTask(task.id);
    };
  
    const handleDelete = () => {
      deleteTask(task.id);
    };
  
    return (
      <li className="row d-flex justify-content-center mt-2" data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="900">
        <span className="col-md-4" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          <b>{task.title}</b>
        </span>
        <button className="completed col-md-1 border-0 rounded-3"  onClick={handleComplete}>{task.completed ? 'Undo' : '✔'}</button>
        <button className="delete col-md-1 border-0 rounded-3" onClick={handleDelete}>❌</button>
      </li>
    );
  }

  export default TodoItem;
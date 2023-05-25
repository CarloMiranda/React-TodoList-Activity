
function TodoItem({ task, completeTask, deleteTask }) {
  
    const handleComplete = () => {
      completeTask(task.id);
    };
  
    const handleDelete = () => {
      deleteTask(task.id);
    };
  
    return (
      <li className="list row d-flex justify-content-center" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="900">
        <div className="d-flex justify-content-between border border-white col-md-4 p-2">
          <div>
            <span>{task.completed ? '✔' : ''}<b>{task.title}</b></span>
          </div>
          <div>
            <button className="completed border-0 rounded-3" title="Undo"  onClick={handleComplete}>{task.completed ? 'Completed' : '✔'}</button>
            <button className="delete border-0 rounded-3" onClick={handleDelete}>❌</button>
          </div>
        </div>
      </li>
    );
  }

  export default TodoItem;
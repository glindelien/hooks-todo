import '../css/task.css';

const Task = ({ task, toggleCompletion, deleteTask }) => {

  let className = task.complete ? 'complete' : null;

  return (
    <li className='task'>
      <span onClick={toggleCompletion} className={className}>
        {task.data}
      </span>
      <input type='button'
             value='X'
             className='delete-button'
             onClick={deleteTask} />
    </li>
  );
};

export default Task;

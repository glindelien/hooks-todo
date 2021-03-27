import '../css/task.css';

const Task = ({ task, index, toggleCompletion, deleteTask }) => {

  let className = task.complete ? 'complete' : null;

  return (
    <li className='task'>
      <span onClick={() => toggleCompletion(index)} className={className}>
        {task.data}
      </span>
      <input type='button' value='X' className='delete-button' onClick={() => deleteTask(index)} />
    </li>
  );
};

export default Task;

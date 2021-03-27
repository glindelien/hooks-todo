import '../css/task.css';

const Task = ({ task, index, toggleCompletion }) => {

  let className = task.complete ? 'complete' : null;

  return (
    <li onClick={() => {toggleCompletion(index)}} className={className}>{task.data}</li>
  );
};

export default Task;

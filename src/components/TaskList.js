import '../css/taskList.css';

import Task from './Task.js';

const TaskList = ({ tasks, toggleCompletion, deleteTask }) => {
  return (
    <ul>
      {tasks.map((current, index) => <Task task={current} key={index} index={index} toggleCompletion={toggleCompletion} deleteTask={deleteTask} />)}
    </ul>
  );
};

export default TaskList;

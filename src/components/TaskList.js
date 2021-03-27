import '../css/taskList.css';

import Task from './Task.js';

const TaskList = ({ tasks, toggleCompletion, deleteTask }) => {
  return (
    <ul>
      {tasks.map((current, index) =>
        <Task task={current}
              key={index}
              deleteTask={() => deleteTask(index)}
              toggleCompletion={() => toggleCompletion(index)}
        />
      )}
    </ul>
  );
};

export default TaskList;

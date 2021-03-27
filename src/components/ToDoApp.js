import { useState } from 'react';
import Form from './Form.js';
import Task from './Task.js';

const ToDoApp = () => {
  const [tasks, setTasks] = useState(['Sup', 'Hi']);

  return (
    <div>
      <Form />
      <ul>
        {tasks.map(current => <Task data={current} />)}
      </ul>
    </div>
  );
};

export default ToDoApp;

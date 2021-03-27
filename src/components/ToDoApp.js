import { useState } from 'react';
import Form from './Form.js';
import Task from './Task.js';

const ToDoApp = () => {

  const defaultTasksString = localStorage.getItem('tasks') || '[]';
  const defaultTasks = JSON.parse(defaultTasksString);

  const [tasks, setTasks] = useState(defaultTasks);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));

  return (
    <div>
      <Form addTask={addTask} />
      <ul>
        {tasks.map((current, index) => <Task data={current} key={index}/>)}
      </ul>
    </div>
  );

};

export default ToDoApp;

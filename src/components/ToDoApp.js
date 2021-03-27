import Form from './Form.js';
import Task from './Task.js';

import useLocalStorage from '../hooks/useLocalStorage.js';

const ToDoApp = () => {

  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

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

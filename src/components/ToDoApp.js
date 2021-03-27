import Form from './Form.js';
import Task from './Task.js';

import useLocalStorage from '../hooks/useLocalStorage.js';

const ToDoApp = () => {

  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = (data) => {
    setTasks([...tasks, {data, complete: false}]);
  }

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].complete = !updatedTasks[index].complete;
    setTasks(updatedTasks);
  };

  return (
    <div>

      <Form addTask={addTask} />

      <ul>
        {tasks.map((current, index) => <Task task={current} key={index} index={index} toggleCompletion={toggleCompletion} />)}
      </ul>

      <input type="button"
             value="Clear All Tasks"
             onClick={() => {setTasks([])}} />

    </div>
  );

};

export default ToDoApp;

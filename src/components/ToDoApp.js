import Form from './Form.js';
import TaskList from './TaskList.js';

import useLocalStorage from '../hooks/useLocalStorage.js';

const ToDoApp = () => {

  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = (data) => {
    setTasks([...tasks, {data, complete: false}]);
  }

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].complete = !updatedTasks[index].complete;
    setTasks(updatedTasks);
  };

  return (
    <div>

      <Form addTask={addTask} />

      <TaskList tasks={tasks}
                deleteTask={deleteTask}
                toggleCompletion={toggleCompletion}  />

      <input type="button"
             value="Clear All Tasks"
             onClick={() => {setTasks([])}} />

    </div>
  );

};

export default ToDoApp;

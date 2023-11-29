import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';

const AddTask = () => {
  const [task, setTask] = useState('');
  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      dispatch({ type: 'ADD_TASK', task: { title: task } }); // Updated dispatch action
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;

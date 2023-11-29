import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';
import Task from './Task';
import { useDrop } from 'react-dnd';

const TaskList = () => {
  const { tasks, updateTaskProgress } = useContext(TaskContext);

  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => {
      // Update the task's progress without checking the drop target
      updateTaskProgress(item.id, item.progress);
    },
  });

  return (
    <div className="task-list" ref={drop}>
      <div className="columns-container">
        <div className="column">
          <h3>Task</h3>
          <ul>
            {tasks
              .filter((task) => task.progress === 'task')
              .map((task) => (
                <Task key={task.id} task={task} />
              ))}
          </ul>
        </div>
        <div className="column">
          <h3>Ongoing</h3>
          <ul>
            {tasks
              .filter((task) => task.progress === 'ongoing')
              .map((task) => (
                <Task key={task.id} task={task} />
              ))}
          </ul>
        </div>
        <div className="column">
          <h3>Complete</h3>
          <ul>
            {tasks
              .filter((task) => task.progress === 'complete')
              .map((task) => (
                <Task key={task.id} task={task} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskList;

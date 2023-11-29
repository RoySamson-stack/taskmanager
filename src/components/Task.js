// Task.js
import React from 'react';
import { useDrag } from 'react-dnd';

const Task = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id, progress: task.progress },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <li ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {task.title}
    </li>
  );
};

export default Task;

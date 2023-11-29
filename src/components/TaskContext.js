// TaskContext.js
import React, { createContext, useReducer } from 'react';

export const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.task.title,
          progress: 'task', // set default progress
        },
      ];
    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.id);
    case 'UPDATE_TASK_PROGRESS':
      return state.map((task) =>
        task.id === action.id ? { ...task, progress: action.progress } : task
      );
    default:
      return state;
  }
};

export const TaskProvider = (props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  // Function to update task progress
  const updateTaskProgress = (taskId, newProgress) => {
    dispatch({ type: 'UPDATE_TASK_PROGRESS', id: taskId, progress: newProgress });
  };

  return (
    <TaskContext.Provider value={{ tasks, updateTaskProgress, dispatch }}>
      {props.children}
    </TaskContext.Provider>
  );
};

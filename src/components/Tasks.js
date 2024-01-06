import React from 'react'
import Task from './Task'

const Tasks = () => {
    const tasks = [
        {id: 1, text: 'Task 1', day: 'Monday', reminder: true},
        {id: 2, text: 'Task 2', day: 'Tuesday', reminder: false}
    ];

  return (
    <>
        {tasks.map((task) => (
            <Task key = {task.id} task={task} />
        ))}
    </>
  );
}

export default Tasks


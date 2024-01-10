import React from 'react'
import { FaTimes } from 'react-icons/fa'
import './Task.css';

const Task = ( { task, onDelete}) => {
  return (
    <div className='task'>
        <h3>
          {task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }}/>
          <button onClick={ () => onDelete(task.id)}>Delete</button>
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task


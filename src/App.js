import React, { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    
  ])
  return (
    <div className='container'>
      <Header />
    </div>
  )
}

export default App

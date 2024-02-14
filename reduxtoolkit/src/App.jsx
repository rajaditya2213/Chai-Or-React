import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'


function App() {

  return (
    <>
      <h1 className=' text-4xl font-bold'>Learn about Toolkit Redux</h1>
      <AddTodo />
      <Todos />
      
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Aditya",
    age:20
  }

  let newArray=[1,2,3,4,5];


  return (
    <>
     <h1 className=' bg-green-400 text-stone-800 p-4 rounded-2xl mb-10 '>Tailwind Test</h1>
     <Card  username="adityaraj" btnText="click Me"/>
     <Card someObje={newArray} username="divyanshuarya" cardImage="https://crictoday.com/wp-content/uploads/2023/03/ms-dhoni-cricket-today-12.webp" />
    </>
  )
}

export default App
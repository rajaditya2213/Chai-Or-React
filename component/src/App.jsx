import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){

  const [name,setName]=useState({firstname:'', lastname:''})

  return(
    <>
      <form>
        <input type="text" value={name.firstname} onChange={e=>setName({...name,firstname: e.target.value})}/>

        <input type="text" value={name.lastname} onChange={e=>setName({...name,lastname: e.target.value})}/>

        <h2>Your first name is - {name.firstname}</h2>
        <h2>Your second name is - {name.lastname}</h2>
        <h2>{JSON.stringify(name)}</h2>

      </form>

       
    </>
  )
}


export default App

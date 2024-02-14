
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

let [count,setCount]=useState(0)

function Chai(){

     return (
          <>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>
               Click Me</button>
          </>
     )
}
export default Chai

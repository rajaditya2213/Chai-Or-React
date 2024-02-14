import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
      
   let [render, setRender]= useState(10)

   function addValue(){
      if(render<20){
        render=render+1;
        setRender(render);
      }
   }

   function removeValue(){
       if(render>0){
         render=render-1;
         setRender(render);
       }
     }


  return (
    <>
       <h1>Coffe and React :{render}</h1>
       <button onClick={addValue}
       >Add Value:{render}</button>
       <br />
       <button onClick={removeValue}
       >Remove Value:{render}</button>
       <h2>Footer: {render}</h2>

    </>
  )
}

export default App

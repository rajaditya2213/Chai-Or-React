import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMode,setThemeMode]=useState("Light")

  const lightTheme=()=>{
     setThemeMode("light")
  }

  const darkTheme=()=>{
    setThemeMode("dark")
  }

  //Actual change in Theme
  useEffect(()=>{
     document.querySelector('html').classList.remove("dark","light")
     document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}} >


    <div className=' min-h-screen flex-wrap flex items-center'>
       <div className=' w-full'>
          <div className=' w-full max-w-sm mx-auto flex justify-end mb-4'>
              <ThemeBtn />

          </div>

          <div className='w-full max-w-sm mx-auto'>
             <Card />

          </div>
       </div>

     </div>

    </ThemeProvider>
  )
}

export default App

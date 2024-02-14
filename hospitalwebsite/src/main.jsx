import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Keyout from './Keyout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Service from './components/Service/Service.jsx'
import Contact from './components/Contact/Contact.jsx'



const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Keyout/>}>
         <Route path='home' element={<Home />} />
         <Route path='about' element={<About />} />
         <Route path='service' element={<Service />} />
         <Route path='contact' element={<Contact />} />     

      </Route>
    )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router}/>
  </React.StrictMode>,
)

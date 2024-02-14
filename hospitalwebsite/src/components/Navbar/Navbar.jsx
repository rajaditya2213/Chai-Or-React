import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineClose , AiOutlineMenu} from "react-icons/ai"
import Button from '../Button/Button'
import Contact from '../Contact/Contact'




export default function Navbar(){
     const [menu,setMenu]=useState(false)
     const [showForm, setShowForm]=useState(false)

  const handleChange = () => {
     setMenu(!menu);
   };
   
  const closeMenu = () => {
     setMenu(false);
   };

   const openForm=()=>{
     setShowForm(true);
     setMenu(false)
   }

   const closeForm=()=>{
     setShowForm(false)
   }

     return(

          
 <div className='fixed w-full z-10 text-white'>
 <div>
      <div className='flex  flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
           
           <div className='flex flex-row items-center cursor-pointer'>
                <Link 
                to="/home" 
                 
                duration={500}
                >
                <h1 className=' text-2xl font-semibold'>WellnessVist</h1>
                </Link>
           </div>
           <nav className=' hidden lg:flex flex-row items-center text-lg font-medium gap-8'>
              
              <Link
              to="home"
              
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
              >
                Home
              
              </Link>

              <Link
                  to="about"
                 
                  duration={500}
                  className=" hover:text-hoverColor transition-all cursor-pointer"
                  >
                  About Us
                </Link>

                 <Link
                  to="service"
                  
                  duration={500}
                  className=" hover:text-hoverColor transition-all cursor-pointer"
                  >
                  Services
                 </Link>


                 <Link
                  to="pages"
                  
                  duration={500}
                  className=" hover:text-hoverColor transition-all cursor-pointer"
                  >
                     Pages
                 </Link>

                 <Link
                  to="blog"
                  
                  duration={500}
                   className=" hover:text-hoverColor transition-all cursor-pointer"
                   
                  >
                     Blog
                 </Link>
           </nav>

           <div className=' hidden lg:flex'>
                <button className=' bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out' onClick={openForm}>Contact us</button>
           </div>

           {showForm && <Contact closeForm={closeForm} />}

           <div className=" lg:hidden flex items-center">
          {menu ? (
          <AiOutlineClose size={28} onClick={handleChange} />
           ) : (
          <AiOutlineMenu size={28} onClick={handleChange} />
)}
</div>
      </div>

 <div className={`${
     menu ? "translate-x-0" : "-translate-x-full"
     } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
<Link

to="/home"

duration={500}
className=" hover:text-hoverColor transition-all cursor-pointer"
onClick={closeMenu}
>
Home
</Link>

<Link
to="about"


duration={500}
className=" hover:text-hoverColor transition-all cursor-pointer"
onClick={closeMenu}

>
About Us
</Link>

<Link
to="service"
duration={500}
className=" hover:text-hoverColor transition-all cursor-pointer"
onClick={closeMenu}
>
  Services
</Link>

<Link
to="page"

duration={500}
className=" hover:text-hoverColor transition-all cursor-pointer"
onClick={closeMenu}
>
  Pages

</Link>

<Link
to="blog"

duration={500}
className=" hover:text-hoverColor transition-all cursor-pointer"
onClick={closeMenu}
>
Blog
</Link>

<div className=" lg:hidden">
<Button title="Contact Us" />
</div>


      </div>
 </div>
</div>
)


    
}
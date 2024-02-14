import React from 'react'


export default function About(){
     return (
          <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 pt-24 lg:pt-16 gap-5">
               <div className=' w-full lg:w-3/4 space-y-4'>
                    <h1 className=' text-4xl font-semibold text-center lg:text-start'>About Us</h1>
                    <p className=' text-justify lg:text-start'>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, enim.
                         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eos.
                    </p>

                    <p className=' text-justify lg:text-start'>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat eveniet cum non rem rerum suscipit excepturi, temporibus eligendi veniam.
                    </p>

                   <p className=' text-justify lg:text-start'>
                    
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem obcaecati voluptas deleniti! Dolorem rem sequi quo labore iure perferendis. Velit.
                   </p>
               </div>
               <div>
                    <img src="" alt="" />
               </div>
          </div>
     )
}
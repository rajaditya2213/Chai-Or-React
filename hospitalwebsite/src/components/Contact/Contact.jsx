import React from 'react'
import Button from '../Button/Button'


export default function Contact({closeForm}){
     return(
          <div className=' fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
               <div className=' popup-form absolute mt-12 text-black'>
                    <form className=' w-80 md:w-96 bg-white p-5 rounded-xl'>
                         <h1 className=' text-2xl font-semibold text-center text-backgroundColor'>Book Now</h1>
                         <div className='flex flex-col'>
                              <input type="text" name=' userFirstName' id='userFirstname' placeholder='First name' className=' py-4 px-2 bg-[#aae4d9] rounded-lg' />
                         </div>

                         <div className='flex flex-col'>
                              <input type="text" name=' userLastName' id='userLastname' placeholder='Last name' className=' py-4 px-2 mt-2 bg-[#ade8dc] rounded-lg' />
                         </div>

                         <div className='flex flex-col'>
                              <input type="email" name=' userEmail' id='userEmail' placeholder='Your Email' className='py-4 mt-2 px-2 bg-[#a1dfd2] rounded-lg' />
                         </div>

                         <div className='flex flex-col'>
                              <input type="number" name=' userNumber' id='userNumber' placeholder='Phone Number' className='py-3 px-2 mt-2 bg-[#94d6c9] rounded-lg' />
                         </div>
                         <div className=' flex gap-5 mt-2'>
                            <Button title="Book Appointment"   />
                              <button className=' bg-backgroundColor text-white px-10 rounded-md active:bg-red-500 py-2  ml-2 mb-2'
                               onClick={closeForm}>Close</button>
                         </div>
                    </form>
               </div>
          </div>
     )
}
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    
  return (
     <div className=" w-full">
        <div>
            <div className=' w-full p-8 bg-gray-300 text-center text-3xl'>
                <h1 className=' text-orange-700 font-semibold italic text-3xl'>Welcome To ShoppingCart <span className=' text-2xl rounded-full border border-blue-800'>🛒</span></h1>
            </div> 

        </div>

        <div className='flex flex-wrap w-full  pt-10 bg-[url(./assets/BG.png)]' >
            <div className=' flex items-center px-10 justify-between mx-10 '>
            <div className=' w-full justify-center'>

                <h1 className=' text-7xl text-orange-600 font-bold font-serif mx-5'>Shopping <span className=' text-orange-600'> Cart</span></h1>
                <p className='mx-5 mt-5  text-gray-700 font-semibold '>Enjoy Shopping and  get  anything you want in <br />Cart to Buy Your Product</p>
                <button className=' mx-5 mt-10 border p-2 rounded-md text-lg bg-orange-500 border-none px-5'>Learn More</button>
                </div>
                <div className=" flex text-left justify-center">
                    <img src="https://www.logodesign.ae/assets/img/inner-banner/shopping-cart.jpg" className=' w-[80%] mb-5 bg-cover rounded-full text-nowrap ' alt="" />     
            </div>
            </div>
        </div>

 </div>
    
  )
}

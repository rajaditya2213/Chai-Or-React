import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export default function Footer() {
  return (
     <footer className='w-full bg-black  p-12 flex justify-between flex-row items-center'>
          <div className='flex  items-center justify-between'>
              <div className=' flex items-center'>
               
            <Link to="/" className=' flex items-center'>
              <img src="https://static.vecteezy.com/system/resources/previews/024/044/741/original/shopping-cart-logo-design-cart-icon-ecommerce-logo-vector.jpg"

              className="ml-10 h-14 w-14 rounded-full"
               alt="logo" />
                        
            </Link>

            <div  className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
               <ul className='flex flex-col  mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-white px-10'>
               <li className='md:mx-2 lg:mx-2 cursor-pointer'>
                   <NavLink to="/"
                   className={({isActive}) =>{
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b
                                          border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                                          hover:text-orange-700 lg:p-0`
                   }}
                   > Home

                   </NavLink>
                </li>

                <li className='md:mx-2 lg:mx-2 cursor-pointer'>
                                 <NavLink
                                     to="/about"
                                     className={({isActive}) =>
                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b
                                          border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                     }
                                 >
                                     About
                                 </NavLink>
                    </li>

                    <li className='md:mx-2 lg:mx-2 cursor-pointer'>
                                 <NavLink
                                      to="/products"
                                      className={({isActive}) =>
                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? " text-orange-700" : "text-gray-700"} border-b
                                          border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                     }
                                 >
                                   Product 
                                                                                              </NavLink>
                          </li>

                          <li className='md:mx-2 lg:mx-2 cursor-pointer'>
                                 <NavLink
                                      to="/github"
                                      className={({isActive}) =>
                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? " text-orange-700" : "text-gray-700"} border-b
                                          border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                     }
                                 >
                                   Github 
                                                                                              </NavLink>
                          </li>


               </ul>

               <div class="flex items-center justify-center mx-10">
                    <p class="text-sm text-orange-600">@ 2023 Epixelab.  All right deserved</p>
                     <button className='text-white px-8 p-2 mx-20 rounded-lg border bg-orange-600 border-none font-semibold text-xl  '>Login</button>
                </div>
              <div className=' text-white '>
                <i class="fa-brands fa-linkedin p-2 text-blue-600"></i>
                <i class="fa-brands fa-instagram p-2 text-orange-600"></i>
                <i class="fa-brands fa-facebook p-2 text-blue-600"></i>

                </div>
            </div>
              </div>


          </div>

     </footer>
  )
}

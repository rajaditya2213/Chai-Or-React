import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
export default function Header() {

  return (
     <header className=' z-50 top-0'>
        <nav className=' bg-black w-[100%] border-x-gray-200 px-4 lg:px-6'>
          <div className=' flex justify-between items-center  mx-auto max-w-screen-xl'>

            <Link to="/" className=' flex items-center'>
              <img src="https://static.vecteezy.com/system/resources/previews/024/044/741/original/shopping-cart-logo-design-cart-icon-ecommerce-logo-vector.jpg"

              className=" ml-14 rounded-full bg-black h-14  w-14 "
               alt="logo" />
        
            </Link>

            <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 '
            id='mobile-menu-2'
            >
              
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-white ">

                <li>
                   <NavLink to="/"
                   className={({isActive}) =>{
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b
                                          border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                                          hover:text-orange-700 lg:p-0`
                   }}
                   > Home 

                   </NavLink>
                </li>
                <li>
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
                    <li>
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

                          <li>
                                 <NavLink
                                      to="/contact"
                                      className={({isActive}) =>
                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? " text-orange-700" : "text-gray-700"} border-b
                                          border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                     }
                                 >
                                   Contact 
                                                                                              </NavLink>
                          </li>


                          <li>
                                 <NavLink
                                      to="/github"
                                      className={({isActive}) =>
                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? " text-orange-700" : "text-gray-700"} border-b
                                          border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                     }
                                 >
                                   Github                                                                                       </NavLink>
                          </li>
              </ul>
              <div className=' p-10 '>
                              <button className=' rounded-lg bg-orange-600 px-5 text-white font-semibold text-lg py-1'>Login</button>
                          </div>

</div>
</div>
            
                 
        </nav>
        
    </header>
)
}

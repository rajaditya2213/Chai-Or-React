import React from 'react'
import Button from '../Button/Button'
import ServiceCard from '../ServiceCard/ServiceCard';
import {RiMicroscopeLine} from "react-icons/ri"
import {FaHeartbeat} from "react-icons/fa"


const Service=()=>{

     const icon1=<RiMicroscopeLine size={35} className=" text-backgroundColor" />

     const icon2=(<MdHealthAndSaftey size={35} className=" text-backgroundColor" />)

     const icon3=<FaHeartbeat size={35} className=" text-backgroundColor" />

     return (
          <div className=' min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16'>
               <div>
                    <h1>Our Services</h1>
                    <p>
                         Lorem ipsum dolor sit amet, consectetur adipisicing.

                    </p>
                    <div>
                         <Button title="See Services" />
                    </div>
               </div>
               <div>
                    <ServiceCard icon={icon1} title="Lab Test" />
                    <ServiceCard icon={icon2} title="Health Check" />
                    <ServiceCard icon={icon3} title="Heart Health" />

               </div>
          </div>
     )
}

export default Service;

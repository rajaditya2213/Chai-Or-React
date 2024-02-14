import React from 'react'
import Button from '../Button/Button'


const Home=(()=>{
     return (

          <div className=" min-h-screen  flex flex-col justify-center lg:px-32 px-5 text-black bg-[url('https://img.freepik.com/free-psd/interior-luxury-hospital-hall-generative-ai_587448-2078.jpg?w=1060&t=st=1704528033~exp=1704528633~hmac=a991783ecb8980d399736d2ffa320f5ee7e72cf6ceb5400ea71973e1f246a660')] bg-cover opacity-90 bg-no-repeat " >


          <div className=' w-full lg:w-4/5 space-y-5 mt-10'>
               <h1 className=' text-5xl font-bold'>Empowering Health Choices for a Vibrant Life Your Trusted.</h1>
               <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sapiente.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, voluptate?
               </p>
               <Button title="See Services" />
          </div>
     </div>
)
     
})

export default Home;

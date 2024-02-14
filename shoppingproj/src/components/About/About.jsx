import React from 'react'

export default function About() {
  return (
    <main className="w-full">
    <div className="w-full flex items-center justify-between flex-wrap">
      <div className=" bg-gray-400  font-semibold w-full p-8 ">
        <h1 className='text-3xl  text-center font-mono italic '>About</h1>
      </div>
    </div>
    <div className=" flex flex-row mb-6 items-center justify-center w-[100%]">
      <div className=" flex  flex-wrap gap-24 p-10  ">
        <div className=" w-full p-4 m-2 md:w-60 rounded-xl flex flex-col text-gray-900 ">
          <h1 className=' text-3xl  font-semibold'>Why Choose Us.</h1>
          <p className=' mt-2 font-serif'>Quos, non, esse eligendi ab accusantium  voluptatem. Maxime eligendi beatae, atque tempora ullam. Vitae delectus quia, consequuntur rerum molestias quo. Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.</p>
        </div>
        <div className=" w-full  p-4 m-2 md:w-60 rounded-xl flex flex-col ">
          <h1 className='text-3xl font-semibold'>Our Mission.</h1>
          <p className=' font-serif mt-2'>Quos, non, esse eligendi ab accusantium voluptatem. Maxime eligendi beatae, atque tempora ullam. Vitae delectus quia, consequuntur rerum molestias quo. Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.</p>
        </div>
        <div className=" w-full p-4 m-2 md:w-60 rounded-xl flex flex-col ">
          <h1 className='text-3xl font-semibold'>What we do.</h1>
          <p className='font-serif mt-2 '>Quos, non, esse eligendi ab  accusantium voluptatem. Maxime eligendi beatae, atque tempora ullam. Vitae delectus quia, consequuntur rerum molestias quo. Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.</p>
        </div>
      </div>
    </div>
  </main>
  )
}

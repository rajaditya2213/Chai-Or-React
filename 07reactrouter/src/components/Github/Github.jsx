import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data=useLoaderData()

    //  const [data,setData]=useState([])
    //  useEffect(()=>{
    //      fetch('https://api.github.com/users/rajaditya2213')
    //      .then(response => response.json())
    //      .then(data => {
    //       console.log(data);
    //       setData(data)
    //      })
    //  },[])
  return (

    <div className=' text-center rounded-lg m-4 bg-gray-900 text-white p-4 text-3xl '>Github Following: {data.following}
    <img src={data.avatar_url} alt="Git Pitcure" width={250} className=' flex justify-center items-center'  />
     </div>
  )
}

export default Github


export const githubInfoLoader=async() =>{
  const response=await fetch('https://api.github.com/users/rajaditya2213')

  return response.json()

}
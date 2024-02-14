import React, { useState , useEffect} from 'react'

function Github() {

     const [data,setData]=useState([])

     
  
     useEffect(()=>{
          fetch('https://api.github.com/users/rajaditya2213')
          .then(response => response.json())
          .then(data =>{
               console.log(data);
               setData(data)
          })
     },[]);


  return (
    <div  className=' w-full bg-gray-400 text-2xl  p-10 text-center font-semibold italic'>Github Login: {data.login}
        <h1 className=' text-red-600'>Github Id: {data.id}</h1>
        <h1 className=' text-green-600'>Github URL: {data.html_url}</h1>
        <h1 className=' text-yellow-600'>Github Location: {data.location}</h1>
        <h1 className=' text-indigo-800'>Github Bio: {data.bio}</h1>
    <img src={data.avatar_url} alt="Github picture" width={300} className=' mb-10' />
    </div>
  )   
}

export default Github
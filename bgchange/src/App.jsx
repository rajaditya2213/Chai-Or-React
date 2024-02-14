import { useState } from "react";


function App() {

  const [color,setColor]=useState('Black')

  return (
    <div className=" w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
       <h1 className=" flex justify-center text-5xl text-blue-700 font-bold italic p-10">Background Changer React</h1>
      <div className="fixed flex justify-center  flex-wrap bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-xl bg-gray-500 px-3 py-2 rounded-3xl gap-3"> 
        <button onClick={()=> setColor("red")}

         className=" outline-none rounded-full px-4 py-1 text-white shadow-lg"
        style={{backgroundColor:'red'}}
        >Red
        </button>

        <button onClick={()=> setColor("green")}

         className=" outline-none rounded-full px-4 py-2 text-white shadow-lg"
        style={{backgroundColor:"green"}}
        >Green</button>


        <button onClick={()=> setColor("yellow")}

         className="outline-none rounded-full px-4 py-2 text-black shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>


        <button onClick={()=> setColor("blue")}

        className="outline-none rounded-full px-4 py-2 text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>


        <button onClick={()=>setColor("pink")}

         className="outline-none rounded-full px-4 py-2 text-black shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>


        <button onClick={()=> setColor("purple")}

         className="outline-none rounded-full px-4 py-2 text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>


        <button onClick={()=> setColor("black")}

        className=" outline-none rounded-full px-4 py-2  text-white shadow-lg" style={{backgroundColor:"black"}}>Black</button>


        <button onClick={()=> setColor("brown")}

         className=" outline-none rounded-full px-4 py-2 text-white shadow-lg" style={{backgroundColor:"brown"}}>Brown</button>


        <button onClick={()=> setColor("grey")}

         className=" outline-none rounded-full px-4 py-2 text-white shadow-lg" style={{backgroundColor:"grey"}}>Grey</button>


        <button onClick={()=> setColor("white")}

         className=" outline-none rounded-full px-4 py-2 text-black shadow-lg" style={{backgroundColor:"white"}}>White</button>

        </div>
      </div>
     
    </div>
    
  );
}

export default App;

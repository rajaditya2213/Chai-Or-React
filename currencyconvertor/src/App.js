import { useState } from 'react';
import {InputBox} from './component'
import usercurrencyInfo from './hooks/currency';

function App() {
  
    const [amount,setAmount]=useState(0)
    const [from,setFrom]=useState("usd")
    const [to,setTo]=useState("inr")
    const [convertAmount, setConvertAmount]=useState(0)


    const currencyInfo=usercurrencyInfo(from)
         const option=Object.keys(currencyInfo)

    
    const swap=()=>{
        setFrom(to)
        setTo(from)
        setConvertAmount(amount)
        setAmount(convertAmount)
    }

    const convert=()=>{
      setConvertAmount(amount * currencyInfo[to])
    }


    return(
      <div className=' w-full h-screen flex flex-wrap justify-center items-center bg-no-repeat bg-cover'
      style={{backgroundImage:`url('https://images.pexels.com/photos/12935072/pexels-photo-12935072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}
      >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto p-5 rounded-lg border border-gray-500 bg-white/30 backdrop-blur-sm'>
          
          <form
          onSubmit={(e)=>{
            e.preventDefault();
            convert()
          }}

          >
            <div className=' w-full mb-1'>
              <InputBox
              label="From"
              amount={amount}
              currencyOption={option}
              onCurrencyChange={(amount)=> setAmount(amount)}
              selectCurrency={from}
              onAmountChange={(amount)=> setAmount(amount)}
              /> 
            </div>

            <div className='w-full h-0.5 relative'>
              <button className='border-2 rounded-md border-red-700 px-2 py-0.5 text-white bg-blue-600 absolute left-1/2 -translate-x-1/2 -translate-y-1/2'
              onClick={swap}
              >
                Swap
                </button>
            </div>

            <div className='w-ful mt-1 mb-4'>
              <InputBox
              label="To"
              amount={convertAmount}
              currencyOption={option}
              onCurrencyChange={(currency)=> setTo(currency)}
              selectCurrency={to}
              amountDisable
              />

            </div>

            <button type='submit' className=' w-full rounded-lg bg-blue-700 text-white px-4 py-3'>
                 Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>

        </div>

      </div>


      </div>
      
    )

}

export default App;

import { useEffect } from 'react'
import { useState } from 'react'

const Files = () => {
    const [num, setNum] = useState(0)

    // First way
    // useEffect(function(){
    //   console.log('use effect running...');
    // })

    // Second way
    useEffect(function(){
      console.log('use effect running...');
    },[])
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={() => {
          setNum(num+1)
        }} className='bg-zinc-600 px-4 py-2 rounded-md'>Click</button>
    </div>
  )
}

export default Files
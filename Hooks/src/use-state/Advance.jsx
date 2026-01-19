import { useState } from 'react'

const Advance = () => {
    const [num, setNum] = useState(10)
    const btnClicked = () =>{
        setNum(20)
        console.log(num);
    }
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={btnClicked} className='bg-zinc-600 px-4 py-2 rounded-md'>Click</button>
    </div>
  )
}

export default Advance
import React, { useState } from 'react'
import './Counter.css'  

const Counter = (props) => {
    const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
        <p id='para'>{props.name} {count}</p>
        <button className='btn' onClick={()=>{setCount(count+1)}}>Add</button>
        <button className='btn' onClick={()=>{setCount(count-1)}}>Minus</button>
    </div>
  )
}

export default Counter
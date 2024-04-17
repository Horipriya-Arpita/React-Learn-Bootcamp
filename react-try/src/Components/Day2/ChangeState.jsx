import React from 'react'
import { useState } from 'react'

const ChangeState = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    const reset = () => {
        setCount(0);
    }

    const [username,setUsername] = useState("Horipriya")

    const handlename = () => {
        setUsername("Arpita");
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>

      <h1>Hiiiii {username}</h1>
      <button onClick={handlename}>Change Name</button>
    </div>
  )
}

export default ChangeState

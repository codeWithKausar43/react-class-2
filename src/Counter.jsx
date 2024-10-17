import { useState } from "react"

export default function Counter(){
  const  [count,setCount] =  useState(0)
    const addCount = () =>{
        const add = count + 1
        setCount(add)
    }
    const countSub = () =>{
        const sub = count -1 
        setCount(sub)
    }

     return(
        <div style={{border:"2px solid lightblue "}}>
            <h3>Counter: {count}</h3>
            <button onClick={addCount}>Add</button>
            <button onClick={countSub}>Sub</button>
        </div>
       
     )
}

 
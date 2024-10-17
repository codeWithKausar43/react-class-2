import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Friends from './friends'
import './App.css'
 
import Counter from './Counter'
import Effects from './Effects'
function App() {

  return (
    <>
     <h1>kausar ahamed</h1>   

      <Friends></Friends>

      <Counter></Counter>
      <Effects></Effects>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleButton("Hemon")}>Love You</button>
     
    </>
  )
}
 const handleClick = () =>{
  alert("Thank You so Much")
 }
 const handleButton = (name) =>{
  alert(name + " + Kausar")
 }
export default App

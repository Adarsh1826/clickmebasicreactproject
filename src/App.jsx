import { useState } from 'react'
import './App.css'
function App() {
  const [counter,setCounter] = useState(0)
  const add =()=>{
    if(counter+1<=20) setCounter(counter+1)
    else counter(counter)
  }
  const remove = ()=>{
    if(counter-1>=0) setCounter(counter-1)
    else setCounter(counter)
  }
  return (
    <>
      <h1>Incrementer And Decrementer</h1>
      <button
      onClick={add}
      >Increment : {counter}</button>
      <br />
      <button
      onClick={remove}
      >Decrement : {counter}</button>
    </>
  )
}

export default App

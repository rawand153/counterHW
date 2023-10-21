import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function App() {

  const[num,setNum]= useState(0);
  const increaseCounter = () => {
    setNum(num+1)
  }
  const[num1,setNum1]= useState(0);
  const decrease = () => {
    setNum(num-1)
  }
  const[num2,setNum2]= useState(0);
  const zero = () => {
    setNum(0)
  }
  return (
    <>
    <button onClick={increaseCounter}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    <button onClick={zero}>Set zero</button>
    <label>{num}</label>
    </>
  )
}

export default App

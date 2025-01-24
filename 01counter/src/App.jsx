import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () =>{
    if (count <=19 && count>=0){
      setCount(count+1)}
    
    // console.log(setCount)
  }
  const removeValue = ()=>{
    if(count > 0 ){
       setCount(count-1)
    }
  
   
  }


  return (
    <>
      <h1>React Series</h1>
      <button onClick={addValue}>Increment counter:{count}</button>
      <br />
      <button onClick={removeValue}>Decrement counter:{count}</button>


    </>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    username:"sam",
    age:19

  }

  return (
    <>
    <Content btn = "Click Me"
    text = "Content 1"
    btn2 = "Login"
    text2 = "Content 2"
     />
    
    </>
  )
}

export default App

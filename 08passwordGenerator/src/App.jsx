import { useCallback, useEffect, useState,useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [numbers,setNumbers]=useState(false)
  const [characters,setCharacters]=useState(false)
  const [password,setPassword]= useState('')

  const passwordRef = useRef(null)


  const generatePassword  = useCallback(()=>{
    let pass  =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers){
      str +="0123456789"
    }
    if(characters){
      str +="!@#$%^&*()_+"
    }
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numbers,characters,setPassword])

  useEffect(()=>{
    generatePassword()
  },[length,numbers,characters,generatePassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,15)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1  className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3 '
        placeholder='password'
        readOnly
        ref={passwordRef}
         />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type = 'range'
            min = {5}
            max={15}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>setLength(e.target.value)}
            />
            <label>Length:{length}</label>
          </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked = {numbers}
          id='numberInput'
          onChange={()=>{setNumbers((prev)=>!prev)}} />
          <label htmlFor="numberInput">Numbers</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked = {characters}
          id='CharactersInput'
          onChange={()=>{setCharacters((prev)=>!prev)}} />
          <label htmlFor="charactersInput">Characters</label>

        </div>

        </div>
      </div>
    </div>
   
  )
}

export default App

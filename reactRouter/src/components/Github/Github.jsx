import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
  const data = useLoaderData()



    // const [data,setData]= useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-3 text-2xl'>
        GitHub Followers : {data.followers}
        <h1>{data.name} <br></br>{data.location}
        </h1>
        <img src={data.avatar_url} alt="git picture" width = {200} height ={500} />

      
    </div>
  )
}

export default Github


export const githubInfoLoader = async()=>{
  const response = await fetch ('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}

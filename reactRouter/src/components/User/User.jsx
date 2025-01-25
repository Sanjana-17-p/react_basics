import React from 'react'
import{useParams} from 'react-router-dom'

// how to take a dynamic data from the url .we can use useParams hook
function User() {
    const {userid}= useParams()
  return (
    <div className='bg-gray-600 text-white text-center p-4'>
      User:{userid}
    </div>
  )
}

export default User

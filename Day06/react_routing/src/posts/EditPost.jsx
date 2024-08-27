import React from 'react'
import { useParams } from 'react-router-dom'


const EditPost = () => {

  const { id } = useParams();
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-8">
          EDIT POSTS
      </h1>

      <p className="text-3xl md:text-2xl font-bold text-green-700 mb-8">The Passed Value from Edit : {id}</p>
    
    </div>
  )
}

export default EditPost
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/authSlice';
import { useDispatch } from 'react-redux';

const AllPosts = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addPage = (para) => {
    navigate(`/AddPost/${para}`);
  }

  const editPage = (id) => {
    navigate(`/EditPost/${id}`);
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate('/Login');
  }


  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-8">
          ALL POSTS
      </h1>

      <div className="flex justify-center">
        <button
          className="shadow bg-green-900 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-4 rounded"
          type="button"
          onClick={() => addPage("Lets Create a New Post")}
          >
          Add Post
        </button>

        <button
          className="shadow bg-green-900 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-4 rounded"
          type="button"
          onClick={() => editPage(5)}
          >
          Edit Post
        </button>

        
      </div>

      <div className="flex justify-center my-3">
        <button
          className="shadow bg-red-900 hover:bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-4"
          type="button"
          onClick={handleLogout}
        >
        Logout
        </button>
      </div>

      
    
    </div>
  )
}

export default AllPosts
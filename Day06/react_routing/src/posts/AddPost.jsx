import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const AddPost = () => {

    const navigate = useNavigate();

    const { para } = useParams();

    const sumbitPost = () => {

        navigate("/AllPosts");
    }
  return (
    <>
        

        {/* <div>
            <h1 class='text-center	py-6 text-green-800 font-bold '>ADD POST</h1>
            <form class=" max-w-md mx-auto space-y-4">
            
                <div class="md:flex md:items-center mb-6 py-3">
                    <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Title
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Enter Title"/>
                    </div>
                </div>

                <div class="md:flex md:items-center mb-6 py-3">
                    <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Content
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Enter Content"/>
                    </div>
                </div>

                <div class="md:flex md:items-center mb-6 py-3">
                    <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        MetaTag
                    </label>
                    </div>
                    <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Enter Image URL"/>
                    </div>
                </div>
                
                
                <div class="md:flex md:items-center py-3">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                    <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                       Create Post
                    </button>
                    </div>
                </div>
            </form>
        </div> */}

        <div className="flex flex-col items-center p-8">
        <p className="text-3xl md:text-2xl font-bold text-green-600 mb-8">{para}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-8">
            Add Post
        </h1>
        <form className="w-full max-w-sm bg-white p-8 rounded shadow-md">
            <div className="mb-6">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="inline-full-name">
                Title
                </label>
                <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="inline-full-name"
                type="text"
                placeholder="Add title"
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="inline-password">
                Content
                </label>
                <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="inline-content"
                type="text"
                placeholder="Add your content"
                />
            </div>


            <div className="flex justify-center">
                <button
                className="shadow bg-green-900 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={sumbitPost}
                >
                Create Post
                </button>
            </div>

            
            </div>
        </form>
        </div>

    
    </>

  )
}

export default AddPost
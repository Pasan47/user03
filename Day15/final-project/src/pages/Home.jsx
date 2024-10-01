import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const students = useState(0);

  return (
    <>
      {/* {isLoading ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <p>Loading posts.....</p>
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <p className="text-red-500">Error......</p>
        </div>
      ) : ( */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="flex items-center justify-between w-full max-w-4xl mb-6">
          <h1 className=" text-2xl font-bold">Student List</h1>
          <div className="flex space-x-2">
            {" "}
            {/* Use space-x-2 for controlled spacing */}
            <Link
              to="/addStudent"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ADD STUDENT
            </Link>
            <Link
              to="/log"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              LOG
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 px-4 border-b">First Name</th>
                <th className="py-2 px-4 border-b">Last Name</th>
                <th className="py-2 px-4 border-b">Age</th>
                <th className="py-2 px-4 border-b">Actions</th>
                <th className="py-2 px-4 border-b"></th>
              </tr>
            </thead>
            <tbody>
              {students.map((p) => (
                <tr className="hover:bg-gray-100" key={p.id}>
                  <td className="py-2 px-4 border-b">{p.posttitle}</td>
                  <td className="py-2 px-4 border-b">{p.postcontent}</td>
                  <td className="py-2 px-4 border-b">{p.url}</td>
                  <td className="py-2 px-4 border-b">
                    <Link
                      to={`editPost/${p.id}`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => {
                        console.log("post deleted");
                      }}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Home;

import React, { useRef } from "react";

const EditStudent = () => {
  let fName = useRef("");
  let lName = useRef("");
  let age = useRef("");

  const editStudent = async () => {
    console.log("To add a new student");

    const obj = {
        //id: stuId,
        fName: fName.current,
        lName: lName.current,
        age: age.current,
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Edit Student</h1>

      <form className="max-w-md w-full space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="fName"
            id="fName"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter First Name"
            onChange={(event) => {
              fName.current = event.target.value;
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lName"
            id="lName"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Last Name"
            onChange={(event) => {
              lName.current = event.target.value;
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="text"
            name="age"
            id="age"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Age"
            onChange={(event) => {
              age.current = event.target.value;
            }}
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={editStudent}
        >
          EDIT STUDENT
        </button>
      </form>
    </div>
  );
};

export default EditStudent;

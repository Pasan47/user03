import axios from 'axios';
import React, { useState } from 'react';

const LogString = () => {
    const [log, setLog] = useState('');

    const fetchLog = async () => {
        try {
            const res = await axios.get('http://localhost:5000/log');
            setLog(res.data.log); // Access the log directly from the response data
        } catch (e) {
            console.log("Log String is not fetched !!!", e);
        }
    }

    return (
        <div className="App">
            <button 
                onClick={fetchLog}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Fetch Log
            </button>
            {log && <p>{log}</p>} {/* Display the log if it exists */}
        </div>
    );
}

export default LogString;

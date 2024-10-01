// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000; // You can choose any port

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // For parsing application/json

// Endpoint to get log string
app.get('/log', (req, res) => {
    const logString = "This is the log string sent from the backend.";
    res.json({ log: logString });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

/* Create the route in the app.js Then call that in the frontend */

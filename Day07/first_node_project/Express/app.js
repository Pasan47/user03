const express = require("express");
const test = require("./test");

const app = express();

console.log("hello");

app.use(express.json());
console.log("world");

app.use("/api/test", test);

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});

//! POSTMAN -->  localhost:5000/api/test/test1

/*OUTPUT 
    {
    "image": "Test"
    }
*/
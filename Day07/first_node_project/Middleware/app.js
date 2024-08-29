const express = require("express");
const test = require("./test");

const app = express();

console.log("hello");

app.use(express.json());
console.log("world");

app.use("/api/test", log, test);

function log( res, req, next){
    req.id = 10;
    console.log("hello log");
    next();
}

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});

//! POSTMAN -->  localhost:5000/api/test/test2

/*OUTPUT 
    {
    "image": "Test"
    }
*/
const express = require("express");
const pug = require("pug");
const student = require("./student");

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use('/student', student);


app.listen(5000, () => {
    console.log("Server listening on port 5000");
});

// http://localhost:5000/student

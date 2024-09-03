const express = require("express");

const tute = require("./tutorial");
const author = require("./author");
const app = express();

app.use(express.json());

//* For tutorial schema
app.use("/api/tute", tute);

//* For author schema
app.use("/api/author", author);

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});

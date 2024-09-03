
const express = require("express");
const post = require("./post_pm");
const order = require("./order");

const app = express();


app.use(express.json());

//* For post schema
app.use("/api/post", post);

//* For order schema
app.use("/api/order", order);

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});


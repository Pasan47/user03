
const express = require("express");
const post = require("./post_pm");
const order = require("./order");
const user = require("./user");
const cors = require("cors")


const app = express();

//* middleware
app.use(express.json());
app.use(cors());

//* For post schema
app.use("/api/post", post);

//* For order schema
app.use("/api/order", order);

//* For user schema
app.use("/api/user", user);

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});


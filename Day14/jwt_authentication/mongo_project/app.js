
const express = require("express");
const cookieParser = require("cookie-parser");
const post = require("./post_pm");
const order = require("./order");
const user = require("./user");

const student = require("./student");

const auth = require("./middleware/auth");

const cors = require("cors")


const app = express();

//* middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//* For authentication
app.use("/api/auth", student);


//* For post schema
app.use("/api/post", auth, post);

// todo localhost:5000/api/post/getAllPost  --> header- Authorization , value - bearer access token 

//* For order schema
app.use("/api/order", order);

//* For user schema
app.use("/api/user", user);



app.listen(5000, () => {
    console.log("Server listening on port 5000");
});


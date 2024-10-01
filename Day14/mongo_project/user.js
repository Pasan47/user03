const connectToDatabase = require("./db"); // use db

const express = require("express")
const mongoose = require("mongoose")


// user schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String
})

// To pass data
const router = express.Router();

// creating the schema as users in the mongodb
const User = mongoose.model("user", userSchema);

// Add new user data
router.post("/addUser", async(req, res) => {    // Wait until connect to the db
    try{
        await connectToDatabase();
        const newUser = new User(req.body);  
        
        await newUser.save();   // save user to the db

        res.send({newUser}); // res.json(); to end the process and show the output as a json
        console.log("user added");
        //console.log(res.send({newUser}));

        return newUser;

    } catch(err){
        console.log(err);
        throw err;
    }
})

// Get all posts
router.get("/getAllUsers", async (req, res) => {
    try {
        await connectToDatabase();
        User.find().then((users) => {
            res.json(users);
        })

    } catch(err){
        res.status(500).json({err : "Failed to retrieve data"})
    }
})

module.exports = router;
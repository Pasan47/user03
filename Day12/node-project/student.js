const express = require("express");
const router = express.Router();

// router.get("/amalya", (req, res) => {
//     res.render({ name: "Amalya"});
// });

router.get("/", (req, res) => {
    res.render("index", {
        title: "Hey",
        message: "Hello there!",
        messageDescription: " I am from Sri Lanka"
    })
})

module.exports = router;
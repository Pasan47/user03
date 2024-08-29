//Todo Install express --> npm i express

const express = require("express");
const router = express.Router();

router.get("/test1", (req, res) => {
    res.send({ image: "Test Image"});
});

module.exports = router;


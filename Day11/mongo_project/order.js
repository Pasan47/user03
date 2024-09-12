const connectToDatabase = require("./db");
const express = require("express");
const { mongoose } = require("mongoose");
const router = express.Router();

const orderSchema = new mongoose.Schema({
    orderType: {
        type: String,
        required : true
    },
    amount : Number,
    price : Number,
});

const Order = mongoose.model("order", orderSchema);

//* add new order
router.post("/addOrder", async(req, res) => {
    try{
        await connectToDatabase();
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.send({newOrder});
        return newOrder;

    } catch(err) {
        res.status(500).json({err : "Failed to add the order"})
    }
})

module.exports = router;
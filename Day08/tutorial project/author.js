const { mongoose  } = require("mongoose");
const author = mongoose.model(
    "author",
    new mongoose.Schema({
        name: String,
        tutorial: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "tutorial", //handle multiple tutorials for a author
            },
        ],
    })
);

module.exports = author;
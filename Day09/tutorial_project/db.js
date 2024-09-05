const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://User1:Ux7Y2utcxcbILHJL@cluster0.pnuam.mongodb.net/",

            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                //ssl: true,
            }
        );
        console.log("Connect to MongoDB Successfully !");
    } catch(err){
        console.log("Error connecting to MongoDB", err);
        process.exit(1)
    }
}

module.exports = connectToDatabase;
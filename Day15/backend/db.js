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
        )

    } catch (e){
        console.log("Error connecting to MongoDB ", e);
        process.exit(1)
    }
}
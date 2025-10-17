var mongoose = require("mongoose")


async function connectToDatabase(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connected to the data base");
    }catch(error){
        console.log("error",error);
    }

}

module.exports = connectToDatabase
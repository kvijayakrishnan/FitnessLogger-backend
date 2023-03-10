

const mongoose = require("mongoose");






module.exports = db = async() => {
    try{
       await mongoose.connect(`${process.env.MONGO_URL}`);
       console.log('DB connection is established')
    }catch(err){
        console.log('Error while connecting db')
    }
}

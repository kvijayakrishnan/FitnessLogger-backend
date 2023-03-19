const mongoose = require('mongoose')

const fitnessSchema = new mongoose.Schema({
    date:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    email:{
        type:String,
        // require:true,
    },
   workout:{
        type:String,
        require:true
    },
<<<<<<< HEAD
    burnedcalories:{
=======
    burnedcalorie:{
>>>>>>> 99d7ce18defa882164b8f17d48e78031bde9e1e3
        type:String,
        require:true,
    }
});

const Fitness =  mongoose.model('Fitness', fitnessSchema);

module.exports = Fitness





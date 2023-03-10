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
    burnedCalorie:{
        type:String,
        require:true,
    }
});

const Fitness =  mongoose.model('Fitness', fitnessSchema);

module.exports = Fitness





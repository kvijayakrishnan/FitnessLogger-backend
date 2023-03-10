const express = require('express');
const Fitness = require('../model/fitness.model.js');
const router = express.Router();    




// to get fitness dashboard
router.get('/get', async(req,res)=>{
    try{
            const data = await Fitness.find();
            res.status(200).send(data);
    }catch(err){
        res.status(500).send({message:'Internal server error'});
    }
});


// Add new fitness log

// router.post('/post', async(req,res) => {
//     const data = req.body;
//     const fit = new Fitness(data);
//    try{
//     const fitn = await fit.save()
//     res.status(200).json(fitn)
//    }catch(err){
//     res.status(500).send({message:'Internal server error'})
//    }
// });

router.post('/fitness', async (req,res)=>{
    try{
        const data = req.body;
        const fit = new Fitness(data);
       await fit.save((err,data) =>{
            if(err){
                return res.status.apply(400).send({message:"Error while create Fitness log"});
            }
            return res.status(201).send({id:data._id, message:'Yah i am fitted now'})
        })
    }catch(err){
        res.status(201).send({message:"Internal server error"});
    }
})










module.exports = router;





























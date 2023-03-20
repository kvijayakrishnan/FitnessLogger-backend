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

router.post('/post', async(req,res) => {
    const data = req.body;
    const fit = new Fitness(data);
   try{
    const fitn = await fit.save()
    res.status(200).json(fitn)
   }catch(err){
    res.status(500).send({message:'Internal server error'})
   }
});



// To update an fitness log
router.put('/put/:fitID', async (req,res) => {
    try{
        const fitnessID = req.params.fitID;
        await Fitness.findOneAndUpdate({_id: fitnessID},{$set:req.body})
             res.status(200).send({id:req.params.fitID, message:"Fitness log has updated successfully.. "});
    }catch(err){
        console.log(err)
        res.status(500).send({message:"Internal server error"})
    }
})



// delete log
router.delete('/delete/:fitID', async (req, res) =>{
    try{
        const fitnessID = req.params.fitID;
        
       await Fitness.deleteOne({_id:fitnessID})
                   res.status(200).send({message:"Fitness log is deleted successfully..."})
    }catch(err){
        console.log(err)
        res.status(500).send({message:"Internal server error"})
    }
})
















module.exports = router;





























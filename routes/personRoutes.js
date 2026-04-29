const express=require('express');
const router=express.Router();
const person= require('./../models/person');

// Post route to add a person
router.post('/', async(req, res)=>{
try{
    const data=req.body;//assumming the requ body contains the person data
    
    //create a new person document using the mongoose model
    const newPerson = new person(data);
    
    //save the new person to the database
    const responce= await newPerson.save();
    console.log('data saved');
    res.status(200).json(responce);


}
catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server Error'});
}
})

//GET method to get the person
router.get('/',async(req, res)=>{
    try{
         const data = await person.find();
         console.log('data fetched');
         res.status(200).json(data);
    }catch(err){
           console.log(err);
           res.status(500).json({error:'internal server Error'});
    }
})


router.get('/:workType', async(req, res)=>{
    try{
      const workType=req.params.workType;
      if(workType== 'chef' || workType=='manager' || workType=='waiter'){
       const response = await person.find({work: workType});
       console.log('response fetched');
       res.status(200).json(response);
      }else{
       res.status(404).json({ error: 'Invalid work type' });
      }
    }catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
})

module.exports=router;
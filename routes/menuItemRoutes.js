const express=require('express');
const router=express.Router();

const menuItem=require('./../models/menuItem');

//post method
router.post('/',async(req , res)=>{
    try{
        const data=req.body;
        const newmenu=  new menuItem(data);

        const responce=await newmenu.save();
        console.log('data saved');
        res.status(200).json(responce);
    }catch(err){
         console.log(err);
         res.status(500).json({error: 'Internal server Error'});
    }
})

//GET method
router.get('/', async(req ,res)=>{
    try{
          const data= await menuItem.find();
          console.log('data fetched');
          res.status(200).json(data);
    }catch(err){
         console.log(err);
         res.status(500).json({error: 'Internal server Error'});
    }
})

router.get('/:tastetype', async(req , res)=>{
    try{
        const tastetype=req.params.tastetype;
        if(tastetype=='sweet' || tastetype=='spicy' || tastetype=='sour'){
            const response=await menuItem.find({taste:tastetype})
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
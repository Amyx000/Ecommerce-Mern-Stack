const usermodel = require("../models/usermodel")


const getuser = async (req,res)=>{   //tested te get metod wit middleware of autoken
    try{
        const user = await usermodel.findOne({_id:req.params.id})
        if(!user){
            res.status(400).json("you are not autenthicated")
        }
        res.status(200).json(user)
    }
    catch(err){
        res.status(400).json("you are not autenthicated")
    }
  
  
}

module.exports= {getuser};
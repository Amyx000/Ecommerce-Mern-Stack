const usermodel = require("../models/usermodel")
const jwt = require("jsonwebtoken")
const { findById } = require("../models/usermodel")

const getuser = async (req,res)=>{  
    
        const user = await usermodel.findOne({_id:req.params.id})
        
        if(!user){
            res.status(400).json("no user id found")
        }

        else{res.status(200).json(user)}
  
}

//get logged user

const loggeduser = async (req, res)=>{
    try {
        const user = await usermodel.findById(req.user.id).select("-password")
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
    
}

const getalluser = async (req,res)=>{
    try {
        const user = await usermodel.find().select("-password"); //excluding the password in user data
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteuser = async (req,res)=>{
    try {
        const user = await usermodel.findOne({_id:req.params.id})
        if(user){
            user.delete();
            res.status(200).json("User Deleted")
        }
        else{res.status(400).json("No user found")}
        
    } catch (err) {
        res.status(400).json(err)
    }
}

const updateusertype = async (req,res)=>{
    try {
        const user = await usermodel.findByIdAndUpdate(req.params.id,
            {$set:{userType:req.body.userType}},
            {new: true}
        )
        res.status(200).json(user)

    } catch (err) {
        res.status(400).json(err)
    }
}

//Add user address

const addAddress =async (req,res)=>{
    try {
        const user = await usermodel.findByIdAndUpdate(req.user.id,{$push:{address:req.body}},{new:true})
        res.status(200).json(user.address)
    } catch (error) {
        console.log(error)
    }
}

module.exports= {getuser, getalluser, deleteuser, updateusertype, loggeduser, addAddress};
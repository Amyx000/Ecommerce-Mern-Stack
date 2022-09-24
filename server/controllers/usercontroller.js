const usermodel = require("../models/usermodel")
const bcrypt = require("bcrypt")

const getuser = async (req,res)=>{  
    
        const user = await usermodel.findOne({_id:req.params.id})
        
        if(!user){
            res.status(400).json("no user id found")
        }

        else{res.status(200).json(user)}
  
}

//Get all users
const getalluser = async (req,res)=>{
    try {
        const user = await usermodel.find().select("-password"); //excluding the password in user data
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
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

//Delete user address

const delAddress = async (req,res)=>{
    try {
        await usermodel.findByIdAndUpdate(req.user.id,{$unset:{address:""}},{new:true})
        res.status(200).json("Address Deleted")
    } catch (error) {
        console.log(error)
    }
}

//update user address

const updateAddress = async (req, res)=>{
    try {
         await usermodel.findByIdAndUpdate(req.user.id,{$set:{address:req.body.updateadd}},{new:true})
        res.status(200).json("Adress Updated")
    } catch (error) {
        console.log(error)
    }
}

//change password

const changePass = async (req,res)=>{
    try {
        const user = await usermodel.findById(req.user.id);
        const match = await bcrypt.compare(req.body.currpass, user.password);
        if(match===true){
            const newpass = await usermodel.findByIdAndUpdate(req.user.id,
                {$set:{password: await bcrypt.hash(req.body.confirmpass, 10)}},
                {new:true}
            )
            res.status(200).json("Password Changed Successfully")

        }else{res.status(400).json("current password not matched!")}

    } catch (error) {
        console.log(error)
    }
}

const changeName = async (req,res)=>{
    try {
        const user = await usermodel.findByIdAndUpdate(req.user.id,
            {$set:{name:req.body.name}},
            {new:true}
        )
        res.status(200).json(user.name)
    } catch (error) {
        console.log(error)
    }
}

module.exports= {
    getuser,
    getalluser,
    deleteuser,
    updateusertype,
    loggeduser,
    addAddress,
    delAddress,
    updateAddress,
    changePass,
    changeName
}
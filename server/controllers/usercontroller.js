const usermodel = require("../models/usermodel")
const bcrypt = require("bcrypt")


const register_user = async (req,res)=>{
    const user = await usermodel({
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        password: await bcrypt.hash(req.body.password, 10),
        dob:req.body.dob
    }
    );

    user.save();
    res.json(user)
}

const login_user =async (req,res)=>{
    try{
        
        const user = await usermodel.findOne({email:req.body.email})

        if(!user){res.status(400).json("No User Found")}
        else{
            const match = await bcrypt.compare(req.body.password, user.password);
            console.log(match)
            if(match===true){
                res.json(user)
            }else{
                res.status(400).json("Wrong Credentials")
            }
            }
    }
    catch(err){
        res.json(err)
    }
    
}


module.exports = {register_user, login_user};
const usermodel = require("../models/usermodel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


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
    res.status(200).json("Registered Successfully")
    
}

const login_user =async (req,res)=>{
    try{
        
        const user = await usermodel.findOne({email:req.body.email})

        if(!user){res.status(400).json("No User Found, Please Register!!")}
        else{
            const match = await bcrypt.compare(req.body.password, user.password);
            
            if(match===true){
                const accesstoken =jwt.sign({
                    id:user._id,
                    isAdmin:user.isAdmin,
                    isSeller:user.isSeller,
                    isBuyer:user.isBuyer,
                },
                process.env.JWT_SECKEY,
                {expiresIn:"3d"}
                )

                const{password, ...restdata}=user._doc;
                res.cookie("token", accesstoken,{httpOnly:true})
                res.json({...restdata, accesstoken})
                
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
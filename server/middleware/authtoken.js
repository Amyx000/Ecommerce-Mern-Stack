const jwt = require("jsonwebtoken")

const authtoken = (req,res,next)=>{
    const token = req.cookies.token;
    
    if(token){
        const user=jwt.verify(token,process.env.JWT_SECKEY)
        res.user=user;
        next();
    }
    else{
        return(
            res.status(400).json("You are not Authenticated")
        )
    }
}

module.exports = {authtoken}
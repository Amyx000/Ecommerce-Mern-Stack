const jwt = require("jsonwebtoken")


//Check for valid jwt token
const authtoken = (req,res,next)=>{
    const token = req.cookies.token;
    
    if(token){
        const user=jwt.verify(token,process.env.JWT_SECKEY, (err,user)=>{
            if (err) res.status(403).json("Token is not valid!");
            res.user=user;
            next();
        })
        
    }
    else{
        return(
            res.status(400).json("You are not Authenticated")
        )
    }
}

//Check if user is admin
const authtoken_admin=(req,res,next)=>{

    const token = req.cookies.token;
    
    if(token){
        const user=jwt.verify(token,process.env.JWT_SECKEY)
        req.user=user
        if(req.user.userType==="admin"){
            next();
        }
        else{
            res.status(400).json("You don'have the access");
        }
    }   
    else{
        return(
            res.status(400).json("You are not Authenticated")
        )
    }

}

//Check if user is seller
const authtoken_seller=(req,res,next)=>{

    const token = req.cookies.token;
    
    if(token){
        const user=jwt.verify(token,process.env.JWT_SECKEY)
        req.user=user
        if(req.user.userType==="seller"){
            next();
        }
        else{
            res.status(400).json("You don'have the access");
        }
    }   
    else{
        return(
            res.status(400).json("You are not Authenticated")
        )
    }

}

module.exports = {authtoken, authtoken_admin, authtoken_seller}
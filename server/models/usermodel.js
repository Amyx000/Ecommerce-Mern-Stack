const mongoose = require("mongoose")

const userschema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true,
        
    },
    password:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

mongoose.pluralize(null);
module.exports = mongoose.model("User", userschema);
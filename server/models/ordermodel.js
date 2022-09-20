const mongoose = require("mongoose")

const orderschema = new mongoose.Schema({
    
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    address:{
        type:Object
    },
    orderdate:{
        type:Date
    },
    orderitems:[{
        product:{
            type:mongoose.Schema.ObjectId,
            ref:"Product"
        },
        quantity:{
            type:Number,
            default:1
        },
        price:{
            type:Number
        },
        orderstatus:{
            type:String,
            default:"Processing"
        }
    }]
    
})

mongoose.pluralize(null)

module.exports= mongoose.model("Order", orderschema)
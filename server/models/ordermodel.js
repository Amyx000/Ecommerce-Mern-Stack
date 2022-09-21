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
        type:Date,
        default:Date.now
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
    }],
    paymentdetails:{
        razorpay_order_id:{
            type:String
        },
        razorpay_payment_id:{
            type:String
        },
        razorpay_signature:{
            type:String
        }
    }
    
})

mongoose.pluralize(null)

module.exports= mongoose.model("Order", orderschema)
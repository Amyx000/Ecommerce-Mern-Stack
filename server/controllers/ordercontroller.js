const ordermodel = require("../models/ordermodel")
const Razorpay = require('razorpay');
const crypto = require("crypto");

var instance = new Razorpay({
    key_id: process.env.RAZOR_KEY_ID,
    key_secret: process.env.RAZOR_KEY_SECRET
})

const newOrder = async (req,res)=>{
    const order = await ordermodel.create(req.body)
    res.status(200).json(order)
}

//get login user orders

const loggedOrder = async (req,res)=>{
    const order = await ordermodel.find({user:req.user.id})
    res.status(200).json(order)
}

//Get all orders for admin

const allOrders = async(req, res)=>{
    const orders = await ordermodel.find()
    let totalamount=0
    orders.forEach(v=>{
        totalamount+=v.totalprice;
    })
    res.status(200).json({totalamount, orders})
}

const updateorderStatus = async (req,res)=>{
    const order = await ordermodel.findOneAndUpdate(
        { "orderitems._id": req.params.id},
        {$set:{"orderitems.$.orderstatus": req.body.status}},
        {new:true}
    )
    res.status(200).json(order)
}

const payment = async (req, res)=>{
    try {
        const options = {
            amount: req.body.amount*100,  // amount in the smallest currency unit
            currency: "INR",
            receipt: "order_rcptid_11"
        };
        
        await instance.orders.create(options, function(err, order) {
            if(err){
                console.log(err)
                return res.status(400).json({message:"Something went wrong!"})
            }
            res.status(200).json(order)
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"Internal server error!"})
    }
}

const paymentVerify = async (req,res)=>{
    // const{paymentdetails,...restdata}=req.body
    const{razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body.paymentdetails
    const sign= razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto.createHmac('sha256', process.env.RAZOR_KEY_SECRET)
                                    .update(sign.toString())
                                    .digest('hex');
    let success = {"signatureIsValid":"false"}

    if(expectedSignature === razorpay_signature){
     success={"signatureIsValid":"true"}
        await ordermodel.create(req.body)
        res.status(200).json(success);
    };
  
}

const getRazorkey = async (req,res)=>{
    res.status(200).json({key:process.env.RAZOR_KEY_ID})
}


module.exports={newOrder, loggedOrder, allOrders, updateorderStatus, payment,paymentVerify, getRazorkey}
const ordermodel = require("../models/ordermodel")

const newOrder = async (req,res)=>{
    const order = await ordermodel.create(req.body)
    res.status(200).json(order)
}

module.exports={newOrder}
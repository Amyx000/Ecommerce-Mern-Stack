const express = require("express")
const { newOrder } = require("../controllers/ordercontroller")
const { authtoken } = require("../middleware/authtoken")
const Router = express.Router()

Router.post("/order",authtoken,newOrder)

module.exports=Router
const express = require("express")
const { newOrder, loggedOrder, allOrders, updateorderStatus, payment } = require("../controllers/ordercontroller")
const { authtoken, authtoken_admin } = require("../middleware/authtoken")
const Router = express.Router()

Router.post("/order",authtoken,newOrder)
Router.get("/user/order",authtoken,loggedOrder)
Router.get("/allorders",authtoken_admin,allOrders)
Router.get("/updateorder/:id",authtoken_admin,updateorderStatus)
Router.post("/order/payment",authtoken,payment)

module.exports=Router
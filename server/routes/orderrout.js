const express = require("express")
const { loggedOrder, allOrders, updateorderStatus, payment, getRazorkey, paymentVerify, getsingleorder } = require("../controllers/ordercontroller")
const { authtoken, authtoken_admin } = require("../middleware/authtoken")
const Router = express.Router()

Router.get("/user/order",authtoken,loggedOrder)
Router.get("/allorders",authtoken_admin,allOrders)
Router.get("/order/:id",authtoken_admin,getsingleorder)
Router.get("/updateorder/:id",authtoken_admin,updateorderStatus)
Router.post("/order/checkout",authtoken,payment)
Router.post("/order/checkout/payment",authtoken,paymentVerify)
Router.get("/getkey",authtoken,getRazorkey)

module.exports=Router
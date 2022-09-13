const express = require("express");
const {register_user, login_user, logout_user, isAuth} = require("../controllers/logincontroller");
const {getuser, getalluser, deleteuser, updateusertype, loggeduser, addAddress} = require("../controllers/usercontroller");
const {authtoken_admin, authtoken } = require("../middleware/authtoken");

const router = express.Router();


router.post("/register",register_user)
router.post("/login",login_user)
router.get("/account/logout",authtoken,logout_user)
router.get("/account/isauth",isAuth)
router.get("/account/:id",authtoken_admin,getuser)
router.get("/account",authtoken,loggeduser)
router.get("/users",authtoken_admin,getalluser)
router.delete("/account/:id",authtoken_admin,deleteuser)
router.put("/account/:id",authtoken_admin,updateusertype)
router.post("/account/addresses",authtoken,addAddress)


module.exports = router;

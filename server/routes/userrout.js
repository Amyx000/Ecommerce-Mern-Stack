const express = require("express");
const {register_user, login_user} = require("../controllers/logincontroller");
const {getuser, getalluser, deleteuser, updateusertype} = require("../controllers/usercontroller");
const {authtoken_admin } = require("../middleware/authtoken");

const router = express.Router();


router.post("/register",register_user)
router.post("/login",login_user)
router.get("/account/:id",authtoken_admin,getuser)
router.get("/users",authtoken_admin,getalluser)
router.delete("/account/:id",authtoken_admin,deleteuser)
router.put("/account/:id",authtoken_admin,updateusertype)


module.exports = router;

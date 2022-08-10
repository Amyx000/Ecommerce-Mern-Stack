const express = require("express");
const {register_user, login_user} = require("../controllers/logincontroller");
const {getuser} = require("../controllers/usercontroller");
const { authtoken } = require("../middleware/authtoken");

const router = express.Router();


router.post("/register",register_user)
router.post("/login",login_user)
router.get("/account/:id",authtoken,getuser)


module.exports = router;

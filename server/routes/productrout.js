const express = require("express")

const { createproduct, getproduct, updateproduct, getproductdetails, deleteproduct, getallproducts } = require("../controllers/productcontroller")
const { authtoken_admin } = require("../middleware/authtoken")


const router = express.Router()


router.post("/products/new", createproduct)
router.get("/products", getproduct)
router.get("/allproduct",authtoken_admin, getallproducts)
router.get("/products/:id", getproductdetails)
router.put("/products/update/:id",authtoken_admin, updateproduct)
router.delete("/products/delete/:id",authtoken_admin, deleteproduct)



module.exports = router;
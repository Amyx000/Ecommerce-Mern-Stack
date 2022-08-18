const express = require("express")

const { createproduct, getproduct, updateproduct, getproductdetails, deleteproduct } = require("../controllers/productcontroller")


const router = express.Router()


router.post("/products/new", createproduct)
router.get("/products", getproduct)
router.get("/products/:id", getproductdetails)
router.put("/products/update/:id", updateproduct)
router.delete("/products/delete/:id", deleteproduct)



module.exports = router;
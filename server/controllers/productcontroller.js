const { findById } = require("../models/productmodel")
const product = require("../models/productmodel")

//creating product by admin
const createproduct = async (req, res) => {

    const productdata = await product.create(req.body)
    res.status(201).json({
        success: true,
        productdata
    })
    console.log("Successful")

}
//fetch product data
const getproduct = async (req, res) => {

    const productdata = await product.find();
    res.status(200).json({
        success: true,
        productdata
    })
}

//fetch product details by id
const getproductdetails = async (req, res) => {
    const productdata = await product.findById(req.params.id)
    if (!productdata) {
        return res.status(500).json({
            success: false,
            message: "ID not found"
        })
    }
    else {
        res.status(200).json({
            success: true,
            productdata
        })
    }
}

//update product

const updateproduct = async (req, res) => {
    let productdata = await product.findById(req.params.id)
    if (!productdata) {
        return res.status(500).json({
            success: false,
            message: "ID not found"
        })
    }
    else {
        productdata = await product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        res.status(200).json({
            success: true,
            productdata
        })
    }
}


//Delete Product

const deleteproduct = async (req, res) => {
    const productdata = await product.findById(req.params.id)
    if (!productdata) {
        return res.status(500).json({
            success: false,
            message: "ID not found"
        })
    }
    else {
        productdata.remove()

        res.status(200).json({
            success: true,
            message: "Product Deleted"
        })

    }

}

module.exports = { createproduct, getproduct, getproductdetails, updateproduct, deleteproduct } 

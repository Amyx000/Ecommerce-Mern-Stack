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

//get all product for admin

const getallproducts = async(req,res)=>{
    const products= await product.find()
    res.status(200).json(products)
}

//fetch product data
const getproduct = async (req, res) => {
    const brand = req.query.brand!==undefined?req.query.brand.split(','):""
    const gender = req.query.gender!==undefined?req.query.gender.split(','):""
    const price = req.query.price!==undefined?req.query.price.split("-"):""
    const sort = req.query.sort
    const search=req.query.search||""
    const prodlimit =5
    let page = isNaN(Number(req.query.page))?1:Number(req.query.page)
    if(page===0){
        page=1 
    }

    const queryfunc = (key)=>{
        var q = {}
        if(key==''){
            q["$nin"]=key;
        }
        else{
            q["$in"]=key;
        }
        return q
    }

    const queryPricefunc = (key)=>{
        var q = {}
        if(key==''){
            q["$nin"]=key;
        }
        else if(/[a-z]/i.test(key)===true){
            q["$in"]=[1]
        }
        else if(isNaN(parseInt(key[1]))===false){
            [q.$gt,q.$lt]=key.map(x=>parseInt(x))
        }
        else{
            q["$in"]=[1]
        }
        return q
    }
    const bnd = queryfunc(brand)
    const gen = queryfunc(gender)
    const prc = queryPricefunc(price)

    const totalprod = await product.find(
        {brand:bnd, gender:gen, price:prc,
            $or:[{brand:{$regex:search,$options:"i"}},{series:{$regex:search,$options:"i"}},{modelno:{$regex:search,$options:"i"}}]
        }).count()

    let productdata
    if(sort==="rec" || sort===undefined){
     productdata = await product.find(
        {brand:bnd, gender:gen, price:prc,
            $or:[{brand:{$regex:search,$options:"i"}},{series:{$regex:search,$options:"i"}},{modelno:{$regex:search,$options:"i"}}]
        }).skip((page-1)*prodlimit).limit(prodlimit);
    }
    else if(sort==="asc"){
        productdata = await product.find({brand:bnd, gender:gen, price:prc,
            $or:[{brand:{$regex:search,$options:"i"}},{series:{$regex:search,$options:"i"}},{modelno:{$regex:search,$options:"i"}}]
        }).sort({"price":1}).skip((page-1)*prodlimit).limit(prodlimit);
    }
    else{
        productdata = await product.find({brand:bnd, gender:gen, price:prc,
            $or:[{brand:{$regex:search,$options:"i"}},{series:{$regex:search,$options:"i"}},{modelno:{$regex:search,$options:"i"}}]
        }).sort({"price":-1}).skip((page-1)*prodlimit).limit(prodlimit);
    }
    res.status(200).json({
        success: true,
        productdata,
        totalprod
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
        productdata = await product.findByIdAndUpdate(req.params.id, req.body, {new: true});

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

module.exports = { createproduct, getproduct, getallproducts, getproductdetails, updateproduct, deleteproduct } 

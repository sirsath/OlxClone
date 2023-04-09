const Product = require("../model/ProductsModal")
const { productUpload } = require("../utils/Upload")
const jwt = require("jsonwebtoken")


exports.ProductsAdd =async (req, res) => { 

    productUpload(req, res, async err => {
        const { id } = jwt.verify(req.headers.authorization, process.env.JWT_KEY)
         req.body.UserId = id
        const { productOwner, productName, productdesc, productPrice, productscategory , owneraddress } = req.body
        if (!productOwner || !productName || !productdesc || !productPrice || !productscategory || !owneraddress) {
            return res.status(400).json({
                message: "All feilds required"
            })
        }  
        if (err) {  
            return res.status(400).json({
                message: "multer error" + err
            })
        }
        const filenames = []  
        for (let i = 0; i < req.files.length; i++) {
            filenames.push(`assets/images/products/${req.files[i].filename}`)
        }
        const result = await Product.create({
            ...req.body,
            productImage: filenames
        })
        res.json({
            message: "product added successfully",
            result
        })
    })  
}
exports.getAllProducts = async (req, res) => {
    const result = await Product.find().select("-createdAt -updatedAt -__v")
    res.json({
        message: "All product fetchd success",
        result 
    })
}  
exports.getsingleProducts = async (req, res) => {
    const { productId } = req.params
    const result = await Product.findById(productId).select("-employeeId -createdAt -updatedAt -__v")
    if (!result) {
        return res.status(400).json({
            message: "invalid user Id"
        })
    }
    res.json({
        message: `Product with id ${productId} fetched success`,
        result
    })
}
exports.DeleteAllProducts = async (req, res) => {
    const result = await Product.deleteMany().select("-employeeId -createdAt -updatedAt -__v")
    console.log(result, "res")
    res.json({
        message: " All product Delete success",
       
    })
}
exports.DeleteOneProducts = async (req, res) => {
    const { Id } = req.params
    const result = await Product.findByIdAndDelete(Id).select("-employeeId -createdAt -updatedAt -__v")
    console.log(result, "res")
    res.json({
        message: `One Delete success Product ${Id}`,
       
    })
}
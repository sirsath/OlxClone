const mongoose = require("mongoose")

const ProductShema = mongoose.Schema({
    UserId: {
        type: String,
    },
    productOwner: {
        type: String,
    },
    productName: {
        type: String,
    },
    productdesc: {
        type: String,
    },
    productImage: {
        type: [String],
    },
    productPrice: {
        type: String,
    },
    productscategory: {
        type: String,
    } ,
    owneraddress: {
        type: String,
    } 
}, { timestaps: true })

module.exports = mongoose.model("product", ProductShema)
const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "user",
    }, 
    products: [
        {
            productId: {
                type: mongoose.Types.ObjectId,
                ref: "product", 
                required: true
            }
        }
    ],
    
    delivered: { 
        type: Boolean,
        default: false
    },
    paymentMode: {
        type: String,
        enum: ["cod", "online"]
    },
    paymentStatus: {
        type: String,
        enum: ["paid", "pending"],
        default: "pending"
    },
    orderStatus: {
        type: String,
        enum: ["placed", "dispatch", "out", "delivered", "cancel", "return"],
        default: "placed"
    },
    paymentId:String,
    orderId:String,
    paymentSignature:String
}, { timestamps: true })

module.exports = mongoose.model("order", orderSchema)
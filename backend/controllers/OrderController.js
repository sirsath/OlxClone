const Order = require("../model/orderModal")

exports.PlaceProducts = async (req, res) => {
    const { type, userId } = req.body
    console.log();
    if (!type) {
        return res.status(400).json({
            message: "please provide type"
        })
    }
    let productArray
    if (type === "buynow") {
        productArray = [{
            productId: req.body.products[0].productId,
        }]
    }
    const result = await Order.create({
        userId,
        payment: "cod",
        products: productArray,
    })
    res.json({
        message: "Order Placed successfulyy",
        result
    })
}

exports.getUserOrder = async (req, res) => {
    const result = await Order.find({ userId: req.body.userId }).populate("products.productId")
        .select("-createdAt -updatedAt -__v")
    console.log(result);
    res.json({
        message: " user order fetched successfulyy",
        result
    })
} 
exports.userCancelOrder = async (req, res) => {
    const { orderId } = req.params
    const result = await Order.findByIdAndUpdate(orderId, { orderStatus: "cancel" })
    res.json({
        message: "order cancled successfulyy",
        result
    })
}
exports.DeleteAllOrders = async (req, res) => {
    const result = await Order.deleteMany()
    res.json({
        message: "Delete All Orders",
        result
    })
} 
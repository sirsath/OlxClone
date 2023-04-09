const { PlaceProducts, getUserOrder, DeleteAllOrders, userCancelOrder } = require("../controllers/OrderController")

 const router = require("express").Router()

    .post("/place", PlaceProducts)
    .get("/history", getUserOrder)
    .put("/cancel/:orderId" , userCancelOrder)
    .delete("/delete", DeleteAllOrders)
 module.exports = router
   
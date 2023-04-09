const { ProductsAdd, getAllProducts, DeleteAllProducts, getsingleProducts, DeleteOneProducts } = require("../controllers/ProductController")
const {Protected } = require("../middleware/auth")

const router = require("express").Router()


.post("/add", Protected , ProductsAdd)
.get("/", getAllProducts)
.delete("/delete", DeleteAllProducts)
.delete("/:Id", DeleteOneProducts)
.get("/:productId", getsingleProducts)
module.exports = router
 
const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")
const connectDB = require("./config/db")
require("dotenv").config({ path: "./.env" })  
connectDB()

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
 
app.use(cors())
app.use("/user", require("./routes/UserRoute"))
app.use("/product", require("./routes/ProductRoute"))
app.use("/order", require("./routes/OrderRoutes"))

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Running http://localhost:${PORT}`)) 
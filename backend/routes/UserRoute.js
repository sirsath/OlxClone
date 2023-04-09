const { UserLogin } = require("../controllers/authController")
const { UserRegister, getAllUser, DeleteAllUser } = require("../controllers/UserController")

const router = require("express").Router()

    .get("/", getAllUser)
    .post("/register", UserRegister)
    .delete("/delete" , DeleteAllUser)

    //  User Login Route
    .post("/login" , UserLogin)
    
    module.exports = router
    
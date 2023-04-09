const User = require("../model/UserModal")
const bcrypt = require("bcryptjs")

exports.UserRegister = async (req, res) => {
    console.log(req.body)
    try {
        const { userName,
            userEmail,
            userContact, userPassword } = req.body
        const hashPass = await bcrypt.hash(userPassword, 10)
        const result = await User.create({
            userName,
            userEmail,
            userContact,
            userPassword: hashPass
        })
        res.json({
            success: true,
            message: "UserRegister successfully...!",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `UserRegister, Error : ${error}`
        })
    }
}
exports.getAllUser = async (req, res) => {
    try {
        const result = await User.find()
        res.json({
            success: true,
            message: "Get All User successfully...!",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `Get All User, Error : ${error}`
        })
    }
}
exports.DeleteAllUser = async (req, res) => {
    try {
        const result = await User.deleteMany()
        res.json({
            success: true,
            message: "User Delete successfully...!",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: ` User,Delete Error : ${error}`
        })
    }
}



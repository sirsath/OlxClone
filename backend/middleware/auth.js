const User = require("../model/UserModal")
const jwt = require("jsonwebtoken")


exports.Protected = async (req, res, next) => {
    const token = req.headers.authorization
    console.log(token)
    if (!token) {
        return res.status(401).json({
            message: "please provide token"
        })
    }
    const { id } = jwt.verify(token, process.env.JWT_KEY)
    const result = await User.findById(id)
    if (!result) {
        return res.status(401).json({
            message: "can not find this user"
        })
    }
    req.body.employeeId = id 
    next()
}


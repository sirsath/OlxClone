const jwt = require("jsonwebtoken")
const User = require("../model/UserModal")
const bcrypt = require("bcryptjs")

exports.UserLogin = async (req, res) => {
    const { userEmail, userPassword, userName, userContact } = req.body
    if (!userEmail || !userPassword) {
        return res.status(401).json({
            message: "All feilds required"
        })       
    }  
    const result = await User.findOne({ userEmail })
    if (!result) {
        return res.status(401).json({
            message: "email is not registered with us "
        })
    }
    const verify = await bcrypt.compare(userPassword, result.userPassword)
    if (!verify) {
        return res.status(401).json({
            message: "email or password wrong"
        }) 
    }
    const token = jwt.sign({ id: result._id }, process.env.JWT_KEY, { expiresIn: "1d" })
    res.json({
        message: "Login Success",
        result : {
           ...result._doc,
            token
        },
    })
}


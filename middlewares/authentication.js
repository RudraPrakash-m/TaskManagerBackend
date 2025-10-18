const jwt = require("jsonwebtoken")

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (error, decode) => {
            req.user = decode
            next()
        })
    } else {
        res.status(401).json({ message: "you are not allowed to access this data because of invalid token" })
    }
}

module.exports = verifyToken
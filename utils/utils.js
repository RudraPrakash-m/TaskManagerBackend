const jwt = require("jsonwebtoken")

const createToken = (payload, secretkey) => {
    const token = jwt.sign(payload, secretkey)
    return token
}

module.exports = createToken
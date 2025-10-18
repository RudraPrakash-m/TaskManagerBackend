const express = require("express")
const { register, otpVerify, login } = require("../../controllers/PublicControllers/publicController")
const USERMODEL = require("../../models/userModel")

const public_route = express.Router()

public_route.get("/", (req, res) => {
    const userData = USERMODEL.find()
    res.json({ message: "This is default page" })
})

public_route.post("/register", register)

public_route.post("/login", login)

public_route.post('/otp', otpVerify)

module.exports = public_route
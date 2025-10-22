const { default: axios } = require("axios");
const USERMODEL = require("../../models/userModel");
const createToken = require("../../utils/utils");
const sendEmail = require("../../config/email/emailConfig");

const register = async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await USERMODEL.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists with this email" });
    }

    const otp = Math.floor(1000 + Math.random() * 9000);

    await sendEmail(
      email,
      "TaskManager OTP Verification",
      `<p>Hello,</p>
       <p>Your OTP for TaskManager registration is: <strong>${otp}</strong></p>
       <p>This OTP will expire in 5 minutes. Do not share it with anyone.</p>`
    );

    res.status(200).json({ message: "OTP sent successfully", otp });
  } catch (error) {
    console.error("Error in register:", error);
    res.status(500).json({ message: "Failed to send OTP email" });
  }
};



const login = async (req, res) => {
    const { email, password } = req.body
    const user = await USERMODEL.findOne({ email })

    if (!user) return res.status(404).json({ message: "user doesn't exists", login: false })

    if (password != user.password) return res.status(401).json({ message: "password is incorrect" })

    const token = createToken({ user }, process.env.SECRET_KEY)
    res.json({ message: "login successfully", token })
}

const otpVerify = async (req, res) => {
    const userData = req.body
    // console.log(userData);

    try {
        const result = await USERMODEL.insertOne(userData)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

module.exports = { register, otpVerify, login }
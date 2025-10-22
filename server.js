const express = require('express')
const cors = require("cors")
const public_route = require('./routes/PublicRoutes/publicRouter')
const connectDB = require('./config/db/db')
const privateRouter = require('./routes/PrivateRoutes/privateRouter')
require("dotenv").config()

const app = express()

connectDB()

app.use(express.json())

app.use(cors({
  origin: ["https://workeasym.netlify.app", "http://localhost:5173"],
  credentials: true
}));

app.use("/api", public_route)

app.use('/api', privateRouter)

app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:${process.env.PORT}`);

})